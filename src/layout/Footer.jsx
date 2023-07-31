import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {

  return (
    <div className='py-2 text-center fixed-bottom' style={{backgroundColor: '#c7c2b5'}}>
      <Link to='/' className='btn btn-info'>
        Home
      </Link>
    </div>
  )
}

export default Footer