import React from 'react'

import './DefaultBtn.css'

export default function DefaultBtn({ children, onClick, type = 'button', svg, alt}) {
  return (
    <button 
        type={type}
        onClick={onClick} 
        className='defaultBtn'
    >
        <div className='sumbitText'>{children}</div>
        <img src={svg} alt={alt} />
    </button>
  )
}
