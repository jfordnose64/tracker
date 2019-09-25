import React, { Component } from 'react'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl'
// import Axios from 'axios'
import MarkerMap from './MarkerMap'
import Axios from 'axios'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
      latitude: 27.77094,
      longitude: -82.66351,
      zoom: 8,
      bearing: 0,
      pitch: 0,
      width: 1000,
      height: 1000
    },
    showPopup: true,
    markers: [
      { title: 'something 1', latitude: 27.87094, longitude: -82.76351 }
    ]
  }

  componentDidMount() {
    this.fetchData()
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
            <Marker latitude={marker.latitude} longitude={marker.longitude}>
              <FaMapMarkerAlt />
            </Marker>
          )
        })}
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    )
  }
}

export default Map
