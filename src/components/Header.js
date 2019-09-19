import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'

const Header = () => {
  return (
    <Router>
      <div className="header">
        <h1 className="pot-header">Pot Hole Tracker</h1>
      </div>
      <Switch>
        <Route exact path="/" component={App.js} />
      </Switch>
    </Router>
  )
}

export default Header
