import React from 'react'
import { NavLink } from 'react-router-dom'

const Users = () => {
  const userIdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <h3>Users view</h3>
      {
        userIdArr.map((item) => {
          return <li><NavLink to={`/user/${item}`}>User {item}</NavLink></li>
        })
      }
    </>
  )

}

export default Users