import React from 'react'

const PostItem = ({data}) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.userId}</td>
      <td>{data.title}</td>
      <td>{data.body}</td>
    </tr>
  )
}

export default PostItem