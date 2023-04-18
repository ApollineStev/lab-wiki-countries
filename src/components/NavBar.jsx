import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar navbar-light bg-light d-flex'>
        <div className='d-flex'>
        <h1>Wiki countries</h1>
            <Link className='text-dark' to={`/`}>Home</Link>
        </div>
    </nav>
  )
}

export default NavBar