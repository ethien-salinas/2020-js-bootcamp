import React from 'react'
import authFunction from '../auth'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {

  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } }
  const login = () => {
    authFunction.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <section>
      <button onClick={login}>Signin</button>
    </section>
  )
}

export default Login