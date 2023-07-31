import React from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineFilePdf} from 'react-icons/ai'
import {HiOutlineQueueList} from 'react-icons/hi2'

const Footer = (props) => {

  return (
    <div className='row justify-content-around mt-0 container-fluid pt-5'>
      <Link to='/text-to-pdf' className='col-4 my-3 py-2 card nav-link text-center homeMenu '>
        <AiOutlineFilePdf style={{ height: '66px', width: '66px'}} className='mx-auto'/>
        <h5 className="my-3 text-dark">Text to PDF</h5>
      </Link>
      <Link to='/queue-system' className='col-4 my-3 py-2 card nav-link text-center homeMenu '>
        <HiOutlineQueueList style={{ height: '66px', width: '66px'}} className='mx-auto'/>
        <h5 className="my-3 text-dark">Queue System</h5>
      </Link>
    </div>
  )
}

export default Footer