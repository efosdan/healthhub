import React from 'react';
import PageLayout from '../common/PageLayout';
import { doctors } from './data';

const ManageDoctors = () => {
  return (
    <PageLayout text={'Manage Doctors'}>
      <div className='flex min-h-screen pb-20 justify-center w-full'>
        <div className='flex flex-col gap-10 w-[86%] py-10'>
          <div className='w-full flex items-end justify-end'>
            <div className='bg-blue-600 w-32 px-4 py-2.5 rounded-3xl items-center justify-center hover:bg-blue-700 hover:cursor-pointer transition duration-300 flex text-white'>
              Add Doctor
            </div>
          </div>
          <div className='p-6 w-full flex-flex-col gap-8 h-full bg-white shadow-custom rounded-2xl'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-2xl text-blue-600 font-semibold'>Doctors</h1>
              <div className='flex flex-row font-medium justify-between items-center'>
                <span className='w-[21%] text-lg'>Doctor</span>
                <span className='w-[21%]'>Specialty</span>
                <span className='w-[14%]'>Gender</span>
                <span className='w-[14%]'>Reviews</span>
                <div className='flex flex-row w-[26%] items-center gap-4'></div>
              </div>
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className='flex flex-row justify-between items-center border-b border-blue-200 pb-2'
                >
                  <div className='w-[21%] flex flex-row items-center gap-4'>
                    <img
                      src={doctor.profile}
                      className='rounded-full w-9 h-9 object-cover'
                      alt=''
                    />
                    <span className=' text-lg'>{doctor.name}</span>
                  </div>
                  <span className='w-[21%]'>{doctor.specialty}</span>
                  <span className='w-[14%]'>{doctor.gender}</span>
                  <span className='w-[14%]'>{doctor.review}</span>
                  <div className='flex flex-row w-[26%] items-center gap-4'>
                    <div className='hover:cursor-pointer w-20 h-10 rounded-lg flex items-center justify-center border border-blue-500 text-blue-500 '>
                      Edit
                    </div>
                    <div className='hover:cursor-pointer w-20 h-10 rounded-lg flex items-center justify-center border border-red-500 text-red-500 '>
                      Delete
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

export default ManageDoctors;
