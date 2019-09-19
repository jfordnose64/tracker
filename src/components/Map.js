import React, { Component } from 'react'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
const TOKEN =
  'pk.eyJ1IjoiamZvcmQwMCIsImEiOiJjazBwYXlyajUwM3hvM2ltdmNweWIwbHc0In0.edXl14jNwhLjY1c-nasHag'
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

export class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 1000,
        height: 1000
      }
    }
  }

  state = {
    showPopup: true
  }
  render() {
    const { viewport } = this.state
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken={TOKEN}
        className="react-map"
      >
        <Marker
          latitude={27.7676}
          longitude={-82.6403}
          offsetLeft={-20}
          offsetTop={-10}
        >
          I'm Here!
        </Marker>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    )
  }
}

export default Map
