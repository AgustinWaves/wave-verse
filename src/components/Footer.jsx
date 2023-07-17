import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer-container'>
      <a href="https://www.linkedin.com/in/agustin-a/" target='_blank' >
      <LinkedInIcon className='link'/>
      </a>
            <div className='sound'>
            <p>SOUND</p><button className='button'>ON</button>
            </div>
    </div>
  )
}

export default Footer

