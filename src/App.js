import React, { Component } from 'react'
import Map from './components/Map'
import InputField from './components/InputField'
import Header from './components/Header'
import Footer from './components/Footer'
import MarkerMap from './components/MarkerMap'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="map-input">
          <Map />
          <section>
            <InputField />
            <MarkerMap />
          </section>
        </div>
        <Footer />
      </section>
    )
  }
}

export default App
