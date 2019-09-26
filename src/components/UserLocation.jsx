import React, { Component } from 'react'

export class UserLocation extends Component {
  state = {
    userLocation: {
      lat: 12,
      long: 34
    }
  }

  componentDidMount() {
    this.setLocationState()
    console.log(this.state.userLocation.lat)
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
  render() {
    return (
      <div>
        <h3>Your Location</h3>
        <p>Latitude: {this.state.userLocation.lat}</p>
        <p>Longitude: {this.state.userLocation.long}</p>
      </div>
    )
  }
}

export default UserLocation
