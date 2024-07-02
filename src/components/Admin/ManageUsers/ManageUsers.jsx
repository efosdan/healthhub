import React from 'react';
import PageLayout from '../common/PageLayout';
import { patients } from './data';

const ManageUsers = () => {
  return (
    <PageLayout text={'Manage Users'}>
      <div className='w-full gap-8 flex justify-center py-10'>
        <div className='w-[90%] flex flex-col gap-8'>
          <div className='p-6 bg-blue-50 gap-3 flex flex-col rounded-xl shaow-custom'>
            <h1 className='text-2xl text-blue-600 font-medium'>Patients</h1>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row items-center justify-between'>
                <span className='w-[18%] font-medium'>Name</span>
                <span className='w-[22%] font-medium'>Email</span>
                <span className='w-[18%] font-medium'>Condition</span>
                <span className='w-[22%] px-3 font-medium'>
                  Doctor Assigned
                </span>
                <span className='w-[24%] font-medium'>
                  Schedule appointment
                </span>
              </div>

              {patients.map((patient, index) => (
                <div
                  key={index}
                  className='flex flex-row pb-2 items-center border-b border-blue-200 justify-between'
                >
                  <span className='w-[18%] text-gray-500'>{patient.name}</span>
                  <span className='w-[22%] text-gray-500'>{patient.email}</span>
                  <span className='w-[18%] text-gray-500'>
                    {patient.conditiion}
                  </span>
                  <span className='w-[20%] text-gray-500'>
                    {patient.doctor}
                  </span>
                  <div className='w-[24%]'>
                    <div className='w-48 text-white bg-blue-500 px-3 py-1 rounded-xl'>
                      Schedule appointment
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

export default ManageUsers;
