import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';
import { MdOutlineManageHistory } from 'react-icons/md';
import { MdOutlineHome } from 'react-icons/md';

const SideBar = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
      icon: <MdOutlineHome size={24} />,
    },
    {
      name: 'Dashboard',
      link: '/admin/dashboard',
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      name: 'Manage users',
      link: '/admin/manage-users',
      icon: <MdManageAccounts size={28} />,
    },
    {
      name: 'Manage doctors',
      link: '/admin/manage-doctors',
      icon: <FaUserDoctor size={24} />,
    },
    {
      name: 'Manage appointments',
      link: '/admin/manage-appointments',
      icon: <MdOutlineManageHistory size={22} />,
    },
  ];
  return (
    <div className='w-[262px] h-screen py-4 px-4 flex flex-col bg-blue-600'>
      <div className='text-white italia text-2xl font-semibold'>Health Hub</div>
      <div className='flex flex-col gap-6 mt-14'>
        {navLinks.map((link, index) => (
          <NavLink
            to={link.link}
            key={index}
            className={({ isActive }) =>
              isActive
                ? 'flex flex-row gap-[6px] items-center bg-white h-12 rounded-[50px] pl-4 text-black font-medium'
                : 'flex flex-row gap-[6px] items-center h-12 rounded-[50px] pl-4 transition text-white hover:text-black hover:bg-white duration-200 font-normal'
            }
            end='admin/'
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
