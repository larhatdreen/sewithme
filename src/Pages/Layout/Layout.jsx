import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './Layout.css'

import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import MobileNav from '../../Components/Navigations/MobileNav';
import Modal from '../../Components/Modal/Modal';
import Footer from '../../Components/Footer/Footer';

export default function Layout({ t, lang, changeLanguage }) {
    const [naviagationMenu, setNavigationMenu] = useState(false)
    const [searchMenu, setSearchMenu] = useState(false)
    const [modal, setModal] = useState(false)

    const navigate = useNavigate();

    const login = false

    useEffect(() => {
        if (naviagationMenu || searchMenu || modal) {
          document.body.style.overflow = 'hidden'; // Отключаем скролл
        } else {
          document.body.style.overflow = ''; // Включаем скролл обратно
        }
    
        return () => {
          document.body.style.overflow = ''; // Чистим эффект при размонтировании
        };
      }, [naviagationMenu, searchMenu, modal]);

    const handleClick = () => {
        if (login) {
            navigate('/progile')
        } else {
            setModal(!modal)
        }
    }
    return (
        <div className='App'>
            <Header 
                t={t} 
                naviagationMenu={naviagationMenu} 
                setNavigationMenu={setNavigationMenu} 
                onClick={naviagationMenu ? () => setNavigationMenu(false) : null}
                handleClick={handleClick} 
                setSearchMenu={setSearchMenu}
            />
            <Search t={t} open={searchMenu} setSearchMenu={setSearchMenu}/>
                {modal &&    
                    <Modal t={t} setModal={setModal} />
                }
            <div className="content">
                <MobileNav t={t} open={naviagationMenu} setOpen={() => setNavigationMenu(!naviagationMenu)} lang={lang} changeLanguage={changeLanguage} />
                <div className="mainContent">
                    <Outlet />
                </div>
                <Footer t={t} />
            </div>
        </div>
    )
}