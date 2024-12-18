import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import Socials from '../Socials/Socials'

import logo from '../../assets/img/logo.svg'

export default function Footer({ t }) {
  return (
    <footer>
        <div className="logoWithSocials">
            <Link to={'/'} className='logoLink'>
                <img src={logo} alt="Логотип SEWITHME в футере" />
            </Link>
            <Socials />
        </div>
        <div className="forBuyers">
            <h2>{t('for_buyers')}</h2>
            <div className="linksForBuyers">
                <Link to={''}>
                    {t('delivery')}
                </Link>
                <Link to={''}>
                    {t('payment')}
                </Link>
                <Link to={''}>
                    {t('return')}
                </Link>
            </div>
        </div>
        <div className="footerContacts">
            <h2>{t('contacts')}</h2>
            <p>{t('email')} — info@sewithme.com</p>
            <Link to={''}>{t('privacy_policy')}</Link>
            <p>{t('IE')} {t('FIO')}</p>
            <p>{t('TIN')} 421716559204</p>
            <p>{t('MSRNAIE')} 324470400048362</p>
        </div>
        <div className="explanation">
            <p>* — {t('meta')}</p>
        </div>
    </footer>
  )
}
