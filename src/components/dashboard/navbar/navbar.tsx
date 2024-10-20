"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import { NotificationIcon } from '../../../../public/assets/icons';
import { CustomModal } from '@/components/reusable/modal/modal';
import profile from '../../../../public/assets/images/profileImage.svg'
import noNotification from '../../../../public/assets/images/noNotification.png'
import { userInfo } from '@/app/constants';

const Navbar = ({ PageTitle, }: { PageTitle: string; }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className='ml-[20%] fixed top-0 w-[100%] p-4 bg-white h-[70px] shadow-sm z-10 flex items-center justify-between'>
      <h1 className='font-[500] text-[21px] text-[#14013A]'>{PageTitle}</h1>

      <div className='ml-[-30px] z-10 w-[54%] flex items-center'>
        <div className='flex items-center'>
          <Link href={'#'} className='text-[#8046F2] font-[400]'>Transactions</Link>
          <p className='mx-4 cursor-pointer'>|</p>
          <Button variant='solid' className='rounded-full w-[35px] h-[35px] bg-[#F9FAFB] grid place-items-center' onClick={handleOpen}>
            <NotificationIcon />
          </Button>
        </div>

        <div className='flex items-center ml-[25px]'>
          <Image alt='' src={profile} className='mr-[10px] w-[50px]'/>
        <div>
          <h1 className='font-[500] text-[16px] mb-[-3px] lowercase'>
            {userInfo.firstName} {userInfo.lastName}
          </h1>
          <p className='text-[14px] font-[400] text-[#5C556C]'>
            {userInfo.emailAddress}
          </p>
        </div>
        </div>
      </div>
      <CustomModal ModalStyling='' modalTitle='Notification' isOpen={isOpen} onClose={handleClose} >
        <div className='w-full h-[70vh] grid place-items-center'>
          <Image alt='' src={noNotification} className='w-[200px]'/>
        </div>
      </CustomModal>
    </div>
  )
}

export default Navbar