import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import authFunction from '../auth'

const PrivateRoute = ({ children, ...rest }) => {

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authFunction.isAuthenticated
          ? children
          : <Redirect to={{
            pathname: "/login",
            state: { from: location }
          }} />
      }}
    />
  )
}

export default PrivateRoute