import React from 'react'

import DefaultBtn from '../../Components/DefaultBtn/DefaultBtn'

import './NotFound.css'

import arrow from '../../assets/img/arrow30.svg'
import notFound from '../../assets/img/404.svg'

export default function NotFound({ t }) {
  return (
    <div className='notFoundContainer'>
      <h1>{t('oops')}</h1>
      <p className='notFoundText'>{t('not_found')}</p>
      <DefaultBtn svg={arrow} fsz={18}>
        <p>{t('back')}</p>
        <p>{t('on_main_page')}</p>
      </DefaultBtn>
      <img className='notFoundImg' src={notFound} alt="Ничего не найдено" />
    </div>
  )
}
