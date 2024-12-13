import React, { useState } from "react";
import "./Modal.css";

import close from "../../assets/img/close.svg";

export default function Modal({ handleOpen }) {
    const [loginForm, setLoginForm] = useState(true)

  return (
    <div className="overall">
      <div className="modal">
        <div className="headerModal">
          <div className="switcher">
            <button className="switch" onClick={() => setLoginForm(true)}>
              <p className={`switchText ${loginForm ? 'selected' : ''}`}>Вход</p>
              <div className="switcherLine" style={{opacity: loginForm ? '1' : '.4'}}></div>
            </button>
            <button className="switch" onClick={() => setLoginForm(false)}>
              <p className={`switchText ${!loginForm ? 'selected' : ''}`}>Регистрация</p>
              <div className="switcherLine" style={{opacity: loginForm ? '0.4' : '1'}}></div>
            </button>
          </div>
          <button onClick={handleOpen}>
            <img src={close} alt="Закрыть модалку" />
          </button>
        </div>
        <div className="form">
            {loginForm ?
            <p><span></span>

            </p>
            :
            <p>

            </p>
            }
        </div>
      </div>
    </div>
  );
}
