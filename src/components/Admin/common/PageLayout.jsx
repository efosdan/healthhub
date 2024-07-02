import React from 'react';
import SideBar from './SideBar';
import AdminHeader from './Header';

const PageLayout = ({ children, text }) => {
  return (
    <div className=''>
      <div className='fixed'>
        <SideBar />
      </div>
      <div className='flex w-full flex-col'>
        <div className='fixed z-10 pl-[262px] w-full'>
          <AdminHeader text={text} />
        </div>
        <div className='ml-[262px] mt-[65px]'>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
