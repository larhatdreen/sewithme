import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";

import RegistrationForm from "../Forms/RegistrationForm";
import LoginForm from "../Forms/LoginForm";

import close from "../../assets/img/close.svg";

export default function Modal({ t, setModal }) {
    const [loginForm, setLoginForm] = useState(false)
    const parentRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (parentRef.current && !parentRef.current.contains(event.target)) {
          setModal(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <div className="overall">
      <div className="modal" ref={parentRef}>
        <div className="headerModal">
          <div className="switcher">
            <button className="switch" onClick={() => setLoginForm(true)}>
              <p className={`switchText ${loginForm ? 'selected' : ''}`}>{t('login')}</p>
              <div className="switcherLine" style={{opacity: loginForm ? '1' : '.4'}}></div>
            </button>
            <button className="switch" onClick={() => setLoginForm(false)}>
              <p className={`switchText ${!loginForm ? 'selected' : ''}`}>{t('registration')}</p>
              <div className="switcherLine" style={{opacity: loginForm ? '0.4' : '1'}}></div>
            </button>
          </div>
          <button onClick={() => setModal(false)} className="closeModal">
            <img src={close} alt="Закрыть модалку" />
          </button>
        </div>
        <div className="formTitle">
            {loginForm ?
            <p>
              <span>{t('login')}</span><br/>
              {t('login_text')}
            </p>
            :
            <p>
              {t('regitration_text')}
            </p>
            }
        </div>
        {loginForm ? <LoginForm t={t} /> : <RegistrationForm t={t} /> }
      </div>
    </div>
  );
}
