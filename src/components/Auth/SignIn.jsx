import React, { useState } from 'react';
import Header from '../common/Header';
import Button from '../../utils/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://health-connect-kyp7.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        console.log('Login successful', data);
        // Handle successful login (e.g., save token, redirect, etc.)
      } else {
        console.error('Login failed', data);
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      console.error('An error occurred during login', error);
      // Handle network or other errors
    }
  };

  return (
    <div className='h-screen w-full'>
      <Header />
      <div className='h-full w-full gap-8 flex bg-blue-50 flex-col items-center pt-28'>
        <div className='flex flex-col gap-8 w-[400px] h-3/5 bg-white rounded-2xl px-5 py-6 shadow-custom'>
          <h1 className='text-center text-blue-600 font-semibold text-3xl'>
            Login
          </h1>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1.5'>
              <span className='font-medium'>Email*</span>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='input_ outline-none rounded-lg px-2 p-1'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <span className='font-medium'>Password*</span>
              <input
                type='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input_ outline-none rounded-lg px-2 p-1'
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <Button
              onClick={handleLogin}
              text={'Sign in'}
              className={'text-center'}
            />
            <div className='text-center text-sm'>
              Don't have an account?{' '}
              <Link to={'/sign-up'} className='text-blue-400 hover:underline'>
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
