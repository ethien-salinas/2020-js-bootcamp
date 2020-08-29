import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const User = () => {

  const history = useHistory()
  const { userId } = useParams()
  const [user, setUser] = useState([])
  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(`${process.env.REACT_APP_USER_URL}/${userId}`)
      const data = await res.json()
      setUser(data)
    }
    getUserData()
  }, [])

  return (
    <>
      <h3>User {user.id}</h3>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>

      <button onClick={() => history.goBack()}>Go back</button>
    </>
  )

}

export default User