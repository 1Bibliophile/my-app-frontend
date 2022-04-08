import React from 'react'
import { useHistory } from 'react-router-dom'

const SubsidiaryCard = ({subsidiary, handleDelete}) => {



  return (
    <div>
      <h3>Name: {subsidiary.name}</h3>
      <h4>Launch Date: {subsidiary.date}</h4>
      <h4>Asset Name: {subsidiary.asset.name}</h4>
      <button onClick={(e) => handleDelete(e, subsidiary.id)}>Delete</button>
      <br />
    </div>
  )
}

export default SubsidiaryCard