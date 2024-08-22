"use client"
import React, { useState } from 'react'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { LikedIcon, LikedIconPurple } from '../../../../public/assets/icons'
import { CustomModal } from '@/components/reusable/modal/modal'
import Image from 'next/image'
import Select from '@/components/reusable/input/MuiSelect'
import { DefaultCard } from '@/components/reusable/card/Card'
import PesLight from '../../../../public/assets/images/PES-light.png'
import PesBlack from '../../../../public/assets/images/PES-black.png'

const page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  
  
  const handleTabsChange = (index: any) => {
    setSelectedIndex(index);
  };
  
  const selectBillers = [
    {
      value: "PES",
      label: "PES",
    },
  ];
  
  const favourite = [
    { Src: PesLight },
    { Src: PesBlack },
    { Src: PesLight },
    { Src: PesBlack },
    { Src: PesLight },
    { Src: PesBlack },
    { Src: PesLight },
  ]
  
  const [liked, setLiked] = useState<boolean[]>(Array(favourite.length).fill(false));
  const toggleLike = (index: number) => {
    // Toggle the liked state for the specific card
    const updatedLikedStates = liked.map((liked, i) => (i === index ? !liked : liked));
    setLiked(updatedLikedStates);
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
                <div className='w-full bg-white rounded-md shadow'>
                  <Select selectText='Select Category' MuiBg='white' selectProviders={selectBillers} MuiCss='' />
                </div>


                <div className='grid grid-cols-4 gap-1 ml-2 py-2'>
                  {favourite.map((card, i) => (
                    <DefaultCard cardStyle='bg-[#F2F4F7] w-[220px] h-[245px] p-2 rounded-xl relative grid place-items-center mb-2' key={i}>
                      <div className='absolute top-2 right-2 cursor-pointer' onClick={() => toggleLike(i)}>
                        {liked[i] ?
                          <LikedIconPurple />
                          :
                          <LikedIcon />
                        }
                      </div>
                      <Image alt='asset categories' src={card.Src} className='w-[150px] h-[160px]'/>
                    </DefaultCard>
                  ))}

                </div>
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
