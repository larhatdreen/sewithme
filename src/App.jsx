import './App.css';
// import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Cart from './Pages/Cart/Cart';
import Patterns from './Pages/Patterns/Patterns';
import Tutorials from './Pages/Tutorials/Tutorials';
import Articles from './Pages/Articles/Articles';
import SizeChart from './Pages/SizeChart/SizeChart';
import Bonuses from './Pages/Bonuses/Bonuses';
import Certificates from './Pages/Certificates/Certificates';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
    localStorage.setItem('language', lang);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout t={t} lang={i18n.language} changeLanguage={changeLanguage} />}>
          <Route index element={<Home t={t} />} />
          <Route path='profile' element={<Profile t={t} />}/>
          <Route path='cart' element={<Cart t={t} />}/>
          <Route path='patterns' element={<Patterns t={t} />} />
          <Route path='tutorials' element={<Tutorials t={t} />} />
          <Route path='articles' element={<Articles t={t} />} />
          <Route path='sizechart' element={<SizeChart t={t} />} />
          <Route path='bonuses' element={<Bonuses t={t} />} />
          <Route path='certificates' element={<Certificates t={t} />} />
          <Route path='contacts' element={<Contacts t={t} />} />
          <Route path='*' element={<NotFound t={t} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
