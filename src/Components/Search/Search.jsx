import React, { useState } from 'react'

import './Search.css'

import close from '../../assets/img/closeSearch.svg'
import search from '../../assets/img/search.svg'

export default function Search({ t, open, setSearchMenu }) {
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className='searchMenuOverlay' style={{opacity: open ? '1' : '0', pointerEvents: open ? '' : 'none'}}>
        <div className="searchMenu" style={{height: open ? '160px' : '0'}}>
            <img className='closeSearch' src={close} alt="Закрыть поисковое меню" onClick={() => setSearchMenu(false)} style={{transform: open ? '' : 'translateY(-100px)'}}/>
            <div className="searchInputContainer" style={{transform: open ? '' : 'translateY(-100px)'}}>
                <img src={search} alt="Картинка поиска" />
                <input 
                    className='searchInput'
                    type="text" 
                    id='search'
                    name='search'
                    placeholder={t('search')}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </div>
        <div>
            fsdfsdfsdfsdfs
        </div>
    </div>
  )
}
