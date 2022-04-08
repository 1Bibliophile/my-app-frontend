import React from 'react'
import SubsidiaryCard from './SubsidiaryCard'


const SubsidiariesList = ({subsidiaries, handleDelete}) => {
  
  const renderSubs = subsidiaries.map(subsidiary => <SubsidiaryCard key={subsidiary.id} subsidiary={subsidiary} 
    handleDelete={handleDelete} />)

  
  
  
  return (
    <div>{renderSubs}</div>
  )
}

export default SubsidiariesList