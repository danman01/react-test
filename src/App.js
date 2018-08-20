import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import { Route, Link } from 'react-router-dom'

const Dashboard = () => (
  <div>
    <h3>Dashboard</h3>
    <p>This is separate route.</p>
  </div>
)

const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <h1>Welcome to React!</h1>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)

export default App
