import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Map from './Map'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const MoreAddressInfo = props => {
  const [latitude, newLatitude] = useState('')
  const [longitude, newLongitude] = useState('')
  const [dateReported, setDateReported] = useState('')

  const fetchAddressInfo = async () => {
    const resp = await Axios.get(
      `https://localhost:5001/api/Pothole/${props.match.params.selectedAddress}`
    )
    console.log(resp.data)
    newLatitude(resp.data.latitude)
    newLongitude(resp.data.longitude)
    setDateReported(resp.data.dateReported)
  }

  const deletePothole = async () => {
    const resp = await Axios.delete(
      `https://localhost:5001/api/Pothole/${props.match.params.selectedAddress}`
    )
    console.log('deleted')
    refreshPage()
  }

  const refreshPage = () => {
    deletePothole()
    window.location.reload(false)
  }

  useEffect(() => {
    fetchAddressInfo()
  }, [])

  const dateToFormat = dateReported

  return (
    <div>
      <Header />
      <section className="more-map">
        <Map />
        <div className="marker-more-info">
          <h4>{latitude}</h4>
          <h4>{longitude}</h4>
          <h5>{dateReported}</h5>
          <p>Is this pot hole still at this location?</p>
          <section>
            <button type="button">Yes</button>
            <button type="button" onClick={refreshPage}>
              No
            </button>
          </section>
          <Link to="/">To Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default MoreAddressInfo
