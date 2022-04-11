import React from 'react'
import { useHistory } from 'react-router-dom'

const AssetCard = ({asset}) => {
    


  return (
    <div>
      <h3>Name: {asset.name}</h3>
      <h4>Launch Date: {asset.date}</h4>
      {/*<h4>Subsidiary Name: {subsidiary.asset.name}</h4>*/}
      {/*<button onClick={(e) => handleDelete(e, subsidiary.id)}>Delete</button>*/}
      <br />
    </div>
  )
}

export default AssetCard