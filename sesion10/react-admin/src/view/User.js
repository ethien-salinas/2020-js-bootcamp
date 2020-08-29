import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userId } = useParams()
  return (
    <>
      <h3>User {userId}</h3>
    </>
  )

}

export default User