import React from 'react';
import Header from '../common/Header';
import Button from '../../utils/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  
  return (
    <div className='h-screen w-full'>
      <Header />
      <div className='h-full w-full gap-8 flex bg-blue-50 flex-col items-center pt-28'>
        <div className='flex flex-col gap-8 w-[400px] bg-white rounded-2xl px-5 py-6 shadow-custom'>
          <h1 className='text-center text-blue-600 font-semibold text-3xl'>
            Register
          </h1>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1.5'>
              <span className='font-medium'>Full Name*</span>
              <input
                type='text'
                placeholder='Full name'
                className='input_ outline-none rounded-lg px-2 p-1'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <span className='font-medium'>Email*</span>
              <input
                type='text'
                placeholder='example@gmail.com'
                className='input_ outline-none rounded-lg px-2 p-1'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <span className='font-medium'>Password*</span>
              <input
                type='password'
                placeholder='********'
                className='input_ outline-none rounded-lg px-2 p-1'
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <Button
                onClick={() => console.log('submit')}
              text={'Submit'}
              className={'text-center'}
            />
            <div className='text-center text-sm'>
              Already have an account?{' '}
              <Link to={'/sign-in'} className='text-blue-400 hover:underline'>
                sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
