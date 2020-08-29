import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../view/Home'
import Login from '../view/Login'
import Dashboard from '../view/Dashboard'
import PrivateRoute from './PrivateRoute'

const MainRouter = () => {
  return (
    <Router>
      <Nav />
      <section className="container">
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </section>
    </Router>
  )
}

export default MainRouter