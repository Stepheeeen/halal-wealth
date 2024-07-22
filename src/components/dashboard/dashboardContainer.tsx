import React, { ReactNode } from 'react';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';

const DashboardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className='ml-[20%] mt-[5%] bg-[#F9FAFB] p-4'>
      {children}
      </main>
    </div>
  );
};

export default DashboardContainer;
