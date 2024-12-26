import React from 'react'

import './Bonuses.css'

import Sale from '../../Components/Sale/Sale'

import photo from '../../assets/img/bonusPhoto.jpeg'

export default function Bonuses({ t }) {
  return (
    <div className='bonusPage'>
      <div className="bonusProgram">
        <div className="bonusProgramText">
          <p>{t('bonus_program')} SEWWITHME:</p>
          <h3>«{t('create_own_style')}!»</h3>
        </div>
        <div className="bonusPhotoContainer">
          <img src={photo} alt="Фотография для бонусной программы" />
        </div>
      </div>
      <div className="descriptionProgram">
        <h2>{t('description_program')}</h2>
        <p>{t('description_text')}</p>
      </div>
      <div className="basic_principles">
        <h2>{t('basic_principles')}<br/><span>1 {t('bonus')} = 1 {t('ruble')}</span></h2>
        <div className="basic_principles_text">
          <h3>{t('bonus_accrual')}</h3>
          <p>— {t('bonus_accrual_1')}</p>
          <p>— {t('bonus_accrual_2')}</p>
          <p>— {t('bonus_accrual_3')}</p>
        </div>
      </div>
      <div className="howUseBonus">
        <h2>{t('how_use_bonus')}</h2>
        <div className="howUseBonusText">
          <h3>{t('sales_on_patterns')}</h3>
          <p>— {t('sales_on_patterns_text')}</p>
        </div>
        <div className="howUseBonusText">
          <h3>{t('free_patterns')}</h3>
          <p>— {t('free_patterns_text')}</p>
        </div>
        <div className="howUseBonusText">
          <h3>{t('video_tutorials')}</h3>
          <p>— {t('video_tutorials_text')}</p>
        </div>
      </div>
      <Sale t={t} />
    </div>
  )
}
