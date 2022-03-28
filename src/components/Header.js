import React from 'react'

const Header = ({slogan, company}) => {
  return (
    <div>
        <h1>{company}</h1>
        <h2 className="slogan">{slogan}</h2>
    </div>
  )
}

export default Header