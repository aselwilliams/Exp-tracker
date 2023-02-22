import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <>
        <h1 style={{marginTop:'1rem'}}>{title}</h1>
        <h3>{subtitle}</h3>
    </>
  )
}

export default Header