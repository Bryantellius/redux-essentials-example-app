import React from 'react'
import { useSelector } from 'react-redux'

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === Number(userId))
  )

  return <span>by {author ? author.name : `Anonymous`}</span>
}

export default PostAuthor
