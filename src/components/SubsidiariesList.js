import React from 'react'
import SubsidiaryForm from './SubsidiaryForm'

const SubsidiariesList = ({subsidiaries}) => {
  
  const renderSubs = subsidiaries.map(subsidiary => <SubsidiaryForm key={subsidiary.id} subsidiary={subsidiary} />)
  
  return (
    <div>{renderSubs}</div>
  )
}

export default SubsidiariesList