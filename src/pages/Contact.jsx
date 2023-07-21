import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <div className='contact-container'>
      <h1 className='hi'>Hi</h1>
      <form action="" className='form'>
        <label htmlFor="">NAME:</label>
        <input type="text" />
        <label htmlFor="">EMAIL:</label>
        <input type="email" />
        <label htmlFor="">MESSAGE:</label>
        <input type="text" />
        <button className='send'>SEND</button>
      </form>
      </div>
    </div>
  )
}

export default Contact