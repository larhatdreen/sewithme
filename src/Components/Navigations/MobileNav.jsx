import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Socials from '../Socials/Socials'

import './Nav.css'

import close from '../../assets/img/closeNav.svg'

export default function MobileNav({ t, open, setOpen, lang, changeLanguage }) {
    const location = useLocation()
  return (
    <div className='overlay' style={{opacity: open ? '1' : '0', pointerEvents: open ? '' : 'none'}}>
        <button className="closeNav" onClick={setOpen}>
            <img src={close} alt="Закрыть навигационное меню" />
        </button>
        <div className="navContainer" style={{width: open ? '55%' : '0'}}>
            <div className="Links">
                <Link to={'/patterns'} onClick={setOpen}>
                    <p className='navLinkText'>{t('patterns')}</p>
                    <div className='navLine' style={{width: location.pathname === '/patterns' ? '100%' : '0'}}></div>
                </Link>
                <Link to={'/tutorials'} onClick={setOpen}>
                    <p className='navLinkText'>{t('video_tutorials')}</p>
                    <div className='navLine' style={{width: location.pathname === '/tutorials' ? '100%' : '0'}}></div>
                </Link>
                <Link to={'/articles'} onClick={setOpen}>
                    <p className='navLinkText'>{t('articles')}</p>
                    <div className='navLine' style={{width: location.pathname === '/articles' ? '100%' : '0'}}></div>
                </Link>
                <Link to={'/sizechart'} onClick={setOpen}>
                    <p className='navLinkText'>{t('size_chart')}</p>
                    <div className='navLine' style={{width: location.pathname === '/sizechart' ? '100%' : '0'}}></div>
                </Link>
                <Link to={'/bonuses'} onClick={setOpen}>
                    <p className='navLinkText'>{t('bonuses')}</p>
                    <div className='navLine' style={{width: location.pathname === '/bonuses' ? '100%' : '0'}}></div>
                </Link>
                <Link to={'/certificates'} onClick={setOpen}>
                    <p className='navLinkText'>{t('certificates')}</p>
                    <div className='navLine' style={{width: location.pathname === '/certificates' ? '100%' : '0'}}></div>
                </Link>
                <Link to={'/contacts'} onClick={setOpen}>
                    <p className='navLinkText'>{t('contacts')}</p>
                    <div className='navLine' style={{width: location.pathname === '/contacts' ? '100%' : '0'}}></div>
                </Link>
            </div>
            <Socials />
            <div className="changeLanguage">
                <p>{t('language')} — <span onClick={changeLanguage} style={{color: lang === 'ru' ? '' : '#A6A6A6'}}>RU</span>, <span onClick={changeLanguage} style={{color: lang === 'en' ? '' : '#A6A6A6'}}>EN</span></p>
            </div>
        </div>
    </div>
  )
}
