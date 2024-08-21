"use client"
import React, { useState } from 'react'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { Button, Select, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { LikedIcon, NotificationIcon } from '../../../../public/assets/icons'
import { CustomModal } from '@/components/reusable/modal/modal'
import Image from 'next/image'

const page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleTabsChange = (index: any) => {
    setSelectedIndex(index);
  };


  return (
    <DashboardContainer PageTItle='Asset financing'>
      <div className='bg-[#F9FAFB]'>
        <div className='w-full h-[100vh]'>
          <Tabs className='w-full' onChange={handleTabsChange}>

            <div className='w-full flex items-center justify-between bg-white px-5 rounded-lg py-1'>
              <TabList className='text-[14px] font-[450] text-[#5C5F84] pt-[20px] border-b-2 border-[#fff] w-[30%]'>
                <Tab className={`w-1/2 pb-[10px] border-b-2 ${selectedIndex === 0 ? 'text-[#8046F2] border-[#8046F2]' : 'border-white hover:text-black'}`}
                >SHOP</Tab>
                <Tab className={`w-1/2 pb-[10px] border-b-2 ${selectedIndex === 1 ? 'text-[#8046F2] border-[#8046F2]' : 'border-white hover:text-black'
                  }`}
                >MY ASSETS</Tab>
              </TabList>

              <Button variant='solid' className='rounded-full w-[40px] h-[40px] bg-[#F9FAFB] grid place-items-center' onClick={handleOpen}>
                <LikedIcon />
              </Button>
            </div>

            <TabPanels className='w-full p-3'>
              <TabPanel className='font-[400] text-[15px]'>
                  SHOPS
              </TabPanel>
              <TabPanel className='font-[400] text-[15px]'>

              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <CustomModal ModalStyling='' modalTitle='Liked' isOpen={isOpen} onClose={handleClose} >
        hello
      </CustomModal>
    </DashboardContainer>
  )
}

export default page
