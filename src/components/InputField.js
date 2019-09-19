import React, { useState } from 'react'

const InputField = () => {
  const [newLatitude, setNewLatitude] = useState('')
  const [newLongitude, setNewLongitude] = useState('')
  const [newDamage, setNewDamage] = useState('')
  const [newAddress, setNewAddress] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(newLatitude)
    console.log(newLongitude)
    console.log(newAddress)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="submit-form">
        <article className="lat-input">
          <label>Latitude</label>
          <input
            type="number"
            value={newLatitude}
            onChange={e => {
              setNewLatitude(e.target.value)
            }}
          />
        </article>
        <article className="long-input">
          <label>Longitude</label>
          <input
            type="number"
            value={newLongitude}
            onChange={e => {
              setNewLongitude(e.target.value)
            }}
          />
        </article>
        <article>
          <label>Address</label>
          <input
            type="text"
            value={newAddress}
            onChange={e => {
              setNewAddress(e.target.value)
            }}
          />
        </article>
        <article className="select-input">
          <label>Did damage occur?</label>
          <select
            type={Boolean}
            value={newDamage}
            onChange={e => {
              setNewDamage(e.target.value)
            }}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
            <option> </option>
          </select>
        </article>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputField
