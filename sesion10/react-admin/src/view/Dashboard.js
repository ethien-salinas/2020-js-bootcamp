import React, { useState, useEffect } from 'react'
import PostList from '../components/PostsList'

const Dashboard = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(process.env.REACT_APP_POST_URL)
      const data = await res.json()
      setPosts(data)
    }
    getPosts()
  }, [])

  return (
    <>
      <h3>Dashboard view</h3>
      <PostList data={posts} />
    </>
  )
}

export default Dashboard