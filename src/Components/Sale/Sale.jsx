import React, { useState } from 'react'
import './Sale.css'

import DefaultBtn from '../DefaultBtn/DefaultBtn';

import arrow from '../../assets/img/arrow20.svg'

export default function Sale({ t }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  return (
    <div className='saleContainer'>
        <div className="saleTitle">
            <h1>{t('sale')} 15% <br /><span>{t('on_first_buy')}</span></h1>
            <p>{t('first_to_know')}</p>
        </div>
        <form className='formSale' onSubmit={null}>
          <input 
            className='saleInput'
            type="name"
            id='name'
            name='name'
            placeholder={t('placeholder_name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          <input
            className='saleInput'
            type="email"
            id='email'
            name='email'
            placeholder={t('placeholder_email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <DefaultBtn type='sumbit' svg={arrow} alt='Кнопка для получения скидки на первую покупку'>
            {t('get_sale')}
          </DefaultBtn>
        </form>
        <p className='offertSale' >{t('offert')} <span>{t('PC')}</span></p>
    </div>
  )
}
