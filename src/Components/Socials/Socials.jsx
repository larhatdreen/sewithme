import React from "react";
import { Link } from "react-router-dom";

import './Socials.css'

import instagram from "../../assets/img/instagram.svg";
import vk from "../../assets/img/vk.svg";
import telegram from "../../assets/img/telegram.svg";

export default function Socials() {
  return (
    <div className="socials">
      <Link to={""}>
        <img src={instagram} alt="Перейти в инстаграм" />
      </Link>
      <Link to={""}>
        <img src={vk} alt="Перейти в вконтакте" />
      </Link>
      <Link to={""}>
        <img src={telegram} alt="Перейти в телеграм" />
      </Link>
    </div>
  );
}
