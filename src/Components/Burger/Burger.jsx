import React from 'react'
import './Burger.css'

export default function Burger({ open, handleOpen }) {
  return (
    <div className='burger' onClick={handleOpen} >
        <div className="line"></div>
        <div className="line" style={{width: open ? '80%' : ''}}></div>
        <div className="line" style={{width: !open ? '80%' : ''}}></div>
    </div>
  )
}
