import React, { useState } from 'react'
import Axios from 'axios'

const InputField = () => {
  const [latitude, setNewLatitude] = useState('')
  const [longitude, setNewLongitude] = useState('')
  const [damage, setNewDamage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(latitude)
    console.log(longitude)
    console.log(damage)
    postData()
  }

  const postData = async () => {
    const resp = await Axios.post('https://localhost:5001/api/Pothole', {
      latitude,
      longitude,
      damage
    })
    console.log('submitted')
  }

  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="submit-form">
        <h3 className="card-header">Report a new Pot Hole</h3>
        <article className="lat-input">
          <label>Latitude</label>
          <input
            type="double"
            step="any"
            max="90"
            min="-90"
            value={latitude}
            onChange={e => {
              setNewLatitude(e.target.value)
            }}
          />
        </article>
        <article className="long-input">
          <label>Longitude</label>
          <input
            type="double"
            step="any"
            max="180"
            min="-180"
            value={longitude}
            onChange={e => {
              setNewLongitude(e.target.value)
            }}
          />
        </article>
        <article className="select-input">
          <label>Did Damage Occur?</label>
          <select
            value={damage}
            onChange={e => {
              setNewDamage(e.target.value)
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
            <option></option>
          </select>
        </article>
        <button onClick={refreshPage}>Submit</button>
      </form>
    </div>
  )
}

export default InputField
