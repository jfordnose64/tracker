import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import Axios from 'axios'

class MarkerMap extends Component {
  state = {
    userLocation: []
  }

  setLocationState = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }
      this.setState({
        userLocation: setUserLocation
      })
    })
  }

  componentDidMount() {
    this.setLocationState()
    console.log(this.state.userLocation)
  }

  render() {
    return <div></div>
  }
}

export default MarkerMap
