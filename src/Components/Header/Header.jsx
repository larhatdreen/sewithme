import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import Burger from '../Burger/Burger'

import profile from '../../assets/img/profile.svg'
import logo from '../../assets/img/logo.svg'

export default function Header({ t, open, setOpen, onClick, handleClick }) {

  return (
    <header onClick={onClick}>
      <div className="topHeader">
        <div className="leftTopHeader">
          <Burger handleOpen={setOpen} open={open}/>
          <img className='profileBtn' src={profile} alt='Открыть профиль или модальное окно' onClick={handleClick} />
        </div>
        <Link to={'/'}>
          <img className='logoForHeader' src={logo} alt="Логотип SEWITHME в хедере" />
        </Link>
      </div>
    </header>
  )
}
