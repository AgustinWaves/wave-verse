import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className='container'>
      <Link to='/work' className='hero-link'>
        <h1 className={`${isHovered ? 'hero-hovered' : 'hero'}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}>WAVES</h1>
        </Link>
        {isHovered && <p className='slogan'><span>&lt;</span> MORE THAN JUST CODE <span>/&gt;</span></p>}
    </div>
  )
}

export default HomePage