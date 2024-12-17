import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Layout.css'

import Header from '../../Components/Header/Header';
import MobileNav from '../../Components/Navigations/MobileNav';
import Modal from '../../Components/Modal/Modal';

export default function Layout({ t, lang, changeLanguage }) {
    const [naviagationMenu, setNavigationMenu] = useState(false)
    const [modal, setModal] = useState(false)

    const navigate = useNavigate();

    const login = false

    const handleClick = () => {
        if (login) {
            navigate('/progile')
        } else {
            setModal(!modal)
        }
    }
    return (
        <div className='App'>
            <Header t={t} open={naviagationMenu} setOpen={() => setNavigationMenu(!naviagationMenu)} onClick={naviagationMenu ? () => setNavigationMenu(false) : null} handleClick={handleClick} />
            <div className="content">
                <MobileNav t={t} open={naviagationMenu} setOpen={() => setNavigationMenu(!naviagationMenu)} lang={lang} changeLanguage={changeLanguage} />
                {modal &&    
                    <Modal t={t} setModal={setModal} />
                }
                <div className="mainContent">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}