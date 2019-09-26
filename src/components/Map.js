import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl'
import Axios from 'axios'
import { FaMapMarkerAlt, FaGenderless } from 'react-icons/fa'

const TOKEN =
  'pk.eyJ1IjoiamZvcmQwMCIsImEiOiJjazBwYXlyajUwM3hvM2ltdmNweWIwbHc0In0.edXl14jNwhLjY1c-nasHag'
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

export class Map extends Component {
  state = {
    viewport: {
      latitude: 27.77,
      longitude: -82.7,
      zoom: 11.5,
      bearing: 0,
      pitch: 0,
      width: 1000,
      height: 1000
    },
    showPopUp: true,
    userLocation: {
      lat: 12,
      long: 34
    },
    selectedAddress: null,
    markers: [
      { title: 'something 1', latitude: 27.87094, longitude: -82.76351, id: 1 }
    ]
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
    this.fetchData()
    this.setLocationState()
  }

  setSelectedAddress = object => {
    this.setState({
      selectedAddress: object
    })
  }

  closePopup = () => {
    this.setState({
      selectedAddress: null
    })
  }

  fetchData = async () => {
    const resp = await Axios('https://localhost:5001/api/Pothole')
    this.setState({
      markers: resp.data
    })
    console.log(resp.data)
  }

  render() {
    const viewport = this.state.viewport
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={viewport => {
          this.setState({ viewport })
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxApiAccessToken={TOKEN}
        className="react-map"
      >
        {this.state.markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              latitude={marker.latitude}
              longitude={marker.longitude}
            >
              <FaMapMarkerAlt
                className="pot-hole-icon"
                onClick={() => {
                  this.setSelectedAddress(marker)
                }}
              />
            </Marker>
          )
        })}
        {this.state.selectedAddress !== null ? (
          <Popup
            latitude={parseFloat(this.state.selectedAddress.latitude)}
            longitude={parseFloat(this.state.selectedAddress.longitude)}
            onClose={this.closePopup}
            onRequestClose={this.closePopup}
          >
            <article>
              <h3>
                <p>Latitude:</p>
                {this.state.selectedAddress.latitude}
              </h3>
              <h3>
                <p>Longitude:</p>
                {this.state.selectedAddress.longitude}
              </h3>
              <Link
                className="popup-link"
                to={`/Pothole/${this.state.selectedAddress.id}`}
              >
                More Info..
              </Link>
            </article>
          </Popup>
        ) : null}
        <div className="nav" style={navStyle}>
          <NavigationControl />
          <Marker
            latitude={this.state.userLocation.lat}
            longitude={this.state.userLocation.long}
            offsetLeft={0}
            offsetTop={0}
          >
            <FaGenderless className="user-location" />
          </Marker>
        </div>
      </ReactMapGL>
    )
  }
}

export default Map
