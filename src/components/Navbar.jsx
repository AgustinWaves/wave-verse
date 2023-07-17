import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link to='/' className='link'>
        .AgustinWaves
      </Link>
      <div className='nav-links'>
        <Link to='/about' className='link'>
          .ABOUT
        </Link>
        <Link to='/work' className='link'>
          .WORK
        </Link>
        <Link to='/contact' className='link'>
          .CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Navbar