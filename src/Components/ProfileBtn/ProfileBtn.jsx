import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import profile from '../../assets/img/profile.svg'
import Modal from '../Modal/Modal';

export default function ProfileBtn() {
    const login = false

    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (login) {
            navigate('/progile')
        } else {
            setOpen(!open)
        }
    }

  return (
    <>
    <img src={profile} alt='Открыть профиль или модальное окно' onClick={handleClick} />
    {open && 
        <Modal handleOpen={() => setOpen(!open)} />
    }
    </>
  )
}
