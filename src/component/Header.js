import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='headermain'>
        <img src='/carlogo.png' alt=''/>
        <Link to={'/'}  className='brandname'>garage</Link>
    </div>
  )
}

export default Header