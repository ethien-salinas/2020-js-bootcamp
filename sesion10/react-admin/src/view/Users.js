import React from 'react'
import { NavLink } from 'react-router-dom'

const Users = () => {
  return (
    <>
      <h3>Users view</h3>
      <li><NavLink to="/user/1">User 1</NavLink></li>
      <li><NavLink to="/user/2">User 2</NavLink></li>
      <li><NavLink to="/user/3">User 3</NavLink></li>
    </>
  )

}

export default Users