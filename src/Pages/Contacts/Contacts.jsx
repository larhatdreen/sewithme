import React from 'react'
import './Contacts.css'

import Socials from '../../Components/Socials/Socials'
import Sale from '../../Components/Sale/Sale'

import photo from '../../assets/img/contactPhoto.jpeg'

export default function Contacts({ t }) {
  return (
    <div className='contactsPage'>
      <h1 className='titleContact'>{t('contacts')}</h1>
      <div className="contactsContainer">
        <div className="ourSocials">
          <h2>{t('our_socials')}</h2>
          <Socials />
        </div>
        <div className="contactWithUs">
          <h2>{t('contact_with_us')}</h2>
          <p>{t('reviews_and_suggestions')} — <a className='mailto' href="mailto:info@sewithme.com">info@sewithme.com</a></p>
        </div>
        <div className="legalInformation">
          <h2>{t('legal_information')}</h2>
          <p>{t('IE')} {t('FIO')}</p>
          <p>{t('TIN')} 421716559204, {t('city')}. {t('saint_petersburg')}</p>
        </div>
      </div>
      <div className="aboutAuthorContainer">
        <h1>{t('about_author')}</h1>
        <p>{t('about_1')}</p>
        <p>{t('about_2')}</p>
        <p>{t('about_3')}</p>
      </div>
      <div className="photoContainer">
        <img className='photo' src={photo} alt="" />
      </div>
      <div className="whereStyleContainer">
        <h2>{t('where_style')}</h2>
        <div className="whereStyleBlock">
          <p className="wsBlockTitle">{t('professional_lecal')}:</p>
          <p className="wsBlockText">— {t('professional_text')}</p>
        </div>
        <div className="whereStyleBlock">
          <p className="wsBlockTitle">{t('clear_designs')}:</p>
          <p className="wsBlockText">— {t('clear_text')}</p>
        </div>
        <div className="whereStyleBlock">
          <p className="wsBlockTitle">{t('current_models')}:</p>
          <p className="wsBlockText">— {t('current_text')}</p>
        </div>
        <p className='wsEndText'><span>Sewwithme — </span>{t('way_to_self')}</p>
      </div>
      <div className="contactSaleContainer">
        <Sale t={t} />
      </div>
    </div>
  )
}
