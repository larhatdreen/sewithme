import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import Burger from '../Burger/Burger'

import profile from '../../assets/img/profile.svg'
import logo from '../../assets/img/logo.svg'
import search from '../../assets/img/search.svg'
import cart from '../../assets/img/cart.svg'

export default function Header({ t, naviagationMenu, setNavigationMenu, onClick, handleClick, setSearchMenu }) {

  return (
    <header onClick={onClick}>
      <div className="topHeader">
        <div className="leftTopHeader">
          <Burger handleOpen={setNavigationMenu} open={naviagationMenu}/>
          <img className='profileBtn' src={profile} alt='Открыть профиль или модальное окно' onClick={handleClick} />
        </div>
        <Link to={'/'} style={{display: 'flex', justifyContent: 'center'}}>
          <img className='logoForHeader' src={logo} alt="Логотип SEWITHME в хедере" />
        </Link>
        <div className="rightTopHeader">
          <img style={{cursor: 'pointer'}} src={search} alt='Открыть поисковое меню' onClick={() => setSearchMenu(true)} />
          <div className="cartIconContainer">
            <img src={cart} alt="Переход в магазин" />
            <div className="itemsCount">
              <p>{'0'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
