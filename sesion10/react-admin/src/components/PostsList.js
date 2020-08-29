import React from 'react'
import PostItem from './PostsItem'

const PostList = ({ data }) => {
  return (
    <table>
      <thead>
        <th>id </th>
        <th>user_id</th>
        <th>title</th>
        <th>body</th>
      </thead>
      <tbody>
        {
          data.map((post) => {
            return <PostItem data={post} />
          })
        }
      </tbody>
    </table>
  )
}

export default PostList