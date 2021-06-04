import React from 'react'
import PostAuthor from './PostAuthor'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostById } from './postsSlice'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>404 Turn Back!</h2>
      </section>
    )
  } else {
    return (
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <PostAuthor userId={post.user} />
          <p className="post-content">{post.content}</p>
          <Link to={`/editPost/${post.id}`}>Edit</Link>
        </article>
      </section>
    )
  }
}

export default SinglePostPage
