import React from 'react'
import './Header.css'

import Burger from '../Burger/Burger'

import profile from '../../assets/img/profile.svg'

export default function Header({ t, open, setOpen, onClick, handleClick }) {

  return (
    <header onClick={onClick}>
      <div className="topHeader">
        <div className="leftTopHeader">
          <Burger handleOpen={setOpen} open={open}/>
          <img className='profileBtn' src={profile} alt='Открыть профиль или модальное окно' onClick={handleClick} />
        </div>
      </div>
    </header>
  )
}
