import React from 'react'
import AssetCard from './AssetCard'


const AssetsList = ({assets}) => {
  
  const renderAssets = assets.map(asset => <AssetCard key={asset.id} asset={asset} />)

  
  
  
  return (
    <div>{renderAssets}</div>
  )
}

export default AssetsList