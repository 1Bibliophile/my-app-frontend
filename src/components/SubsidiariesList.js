import React from 'react'
import SubsidiaryCard from './SubsidiaryCard'

const SubsidiariesList = ({subsidiaries}) => {
  
  const renderSubs = subsidiaries.map(subsidiary => <SubsidiaryCard key={subsidiary.id} subsidiary={subsidiary} />)
  
  return (
    <div>{renderSubs}</div>
  )
}

export default SubsidiariesList