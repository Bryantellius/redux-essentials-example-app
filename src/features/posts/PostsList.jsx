import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'

const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((p) => (
    <article className="post-excerpt" key={p.id}>
      <h3>{p.title}</h3>
      <PostAuthor userId={p.user} />
      <p className="post-content">{p.content.substring(0, 100)}</p>
      <Link to={`/posts/${p.id}`}>View Post</Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
