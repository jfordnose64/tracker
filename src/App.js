import React, { Component } from 'react'
import Map from './components/Map'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MoreAddressInfo from './components/MoreAddressInfo'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Switch>
            <Route
              exact
              path="/Pothole/:selectedAddress"
              component={MoreAddressInfo}
            />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </section>
      </Router>
    )
  }
}

export default App
