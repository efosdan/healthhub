import React from 'react';
import PageLayout from '../common/PageLayout';
import { appointmentRequest, appointments } from './data';
import { FaCheck } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';

const ManageAppointments = () => {
  return (
    <PageLayout text={'Manage Appointments'}>
      <div className='w-full gap-8 flex justify-center py-10'>
        <div className='w-2/3 flex flex-col gap-16'>
          <div className='p-6 bg-blue-50 gap-3 flex flex-col rounded-2xl shaow-custom'>
            <h1 className='text-2xl text-blue-600 font-medium'>
              Todays Appointments
            </h1>
            <div className='flex flex-col gap-2 w-full'>
              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className='bg-white shadow-customWhite rounded-lg flex flex-row justify-between items-center p-4'
                >
                  <div className='flex flex-col'>
                    <span
                      className={`text-xs ${
                        appointment.type == 'FIRST VISIT' && 'text-blue-400'
                      } ${appointment.type == 'EMERGENCY' && 'text-red-400'} ${
                        appointment.type == 'CONSULTANCY' && 'text-gray-400'
                      }`}
                    >
                      {appointment.type}
                    </span>
                    <h1 className='font-medium text-lg'>
                      {appointment.name}, {appointment.age}
                    </h1>
                    <span className='text-xs text-gray-400'>
                      {appointment.cardNo}
                    </span>
                    <span className='text-sm'>{appointment.issue}</span>
                  </div>
                  <div className='text-xl'>{appointment.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className='p-6 bg-white gap-6 flex flex-col rounded-2xl shadow-custom'>
            <h1 className='text-2xl text-blue-600 font-medium'>
              Appointment Request
            </h1>
            <div className='flex flex-col gap-2 w-full'>
              {appointmentRequest.map((appointment, index) => (
                <div
                  key={index}
                  className='bg-blue-50 shadow-customWhite rounded-lg flex flex-row justify-between items-center p-4'
                >
                  <div className='flex flex-row items-center justify-between w-full'>
                    <span className='w-[30%]'>{appointment.name}</span>
                    <span className='w-[24%]'>{appointment.date}</span>
                    <span className='w-[20%]'>{appointment.time}</span>
                    <div className='flex w-[24%] flex-row items-center gap-4'>
                      <div className='hover:cursor-pointer duration-300 hover:bg-white flex items-center justify-center border border-blue-400 text-blue-400 w-6 h-6 rounded-lg'>
                        <FaCheck />
                      </div>
                      <div className='hover:cursor-pointer duration-300 hover:bg-white flex items-center justify-center border border-red-400 text-red-400 w-6 h-6 rounded-lg'>
                        <IoCloseOutline />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ManageAppointments;
