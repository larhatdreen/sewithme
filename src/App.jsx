import './App.css';
// import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter} from "react-router-dom";

import Header from './Components/Header/Header'

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
    localStorage.setItem('language', lang);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
