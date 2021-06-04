import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { selectAllPosts, fetchPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import { useDispatch, useSelector } from 'react-redux'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const error = useSelector((state) => state.posts.error)

  const postStatus = useSelector((state) => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((p) => (
      <article className="post-excerpt" key={p.id}>
        <h3>{p.title}</h3>
        <PostAuthor userId={p.user} />
        <p className="post-content">{p.content.substring(0, 100)}</p>
        <Link to={`/posts/${p.id}`}>View Post</Link>
      </article>
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostsList
