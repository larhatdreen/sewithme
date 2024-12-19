import React, { useState } from 'react'
import './Forms.css'

import DefaultBtn from '../DefaultBtn/DefaultBtn'

import arrow from '../../assets/img/arrow20.svg'
import eye from '../../assets/img/eye.svg'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordMinLength = 6;

const validateEmail = (email) => emailRegex.test(email);
const validatePassword = (password) => password.length >= passwordMinLength;

export default function LoginForm({ t }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateEmail(email)) {
        setError('Invalid email address');
        return;
      }
      if (!validatePassword(password)) {
        setError(`Password must be at least ${passwordMinLength} characters long`);
        return;
      }
      setError(null);
  
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const result = await response.json();
        console.log('Login successful:', result);
      } catch (err) {
        console.error('Login failed:', err);
      }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };
  
    return (
      <form className='form' onSubmit={handleSubmit}>
          <input
            className='formInput'
            type="email"
            id='login_email'
            name='email'
            placeholder={t('placeholder_email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <div className='formPassword'>
            <input
                className='formInput'
                type={isPasswordVisible ? 'text' : 'password'}
                id='password'
                name='password'
                placeholder={t('placeholder_password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="password"
                required
            />
            <img 
                className='passwordHide' 
                src={eye} 
                alt={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'} 
                onClick={togglePasswordVisibility}
            />
            <div className='hideAnimate' style={{height: isPasswordVisible ? '10px' : '0'}}></div>
          </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <DefaultBtn onClick={''} type='sumbit' svg={arrow} alt={'Зарегистрировать аккаунт'}>
          {t('registration')}
        </DefaultBtn>
        <button className='forgotBtn' type="button" onClick={() => alert('Redirect to password recovery')}>{t('forgot_password')}</button>
      </form>
    );
}
