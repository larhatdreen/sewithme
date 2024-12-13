import React, { useState } from 'react'
import './Header.css'

import Burger from '../Burger/Burger'
import ProfileBtn from '../ProfileBtn/ProfileBtn'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="topHeader">
        <div className="leftTopHeader">
          <Burger handleOpen={() => setOpen(!open)} open={open}/>
          <ProfileBtn />
        </div>
      </div>
    </header>
  )
}
