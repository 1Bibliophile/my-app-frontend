import React from 'react'

const SubsidiaryCard = ({subsidiary}) => {
  return (
    <div>
      <h3>Name: {subsidiary.name}</h3>
      <h4>Launch Date: {subsidiary.date}</h4>
      <br />
    </div>
  )
}

export default SubsidiaryCard