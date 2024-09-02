"use client"
import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/settings/modalContent'
import profile from '../../../../public/assets/images/profileImage.svg'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { DefaultButton } from '@/components/reusable/button/Button'
import { BankBuilding, CreditCard, FAQIcon, GreenProfile, LockIcon, NextIcon, OutlinedProfile, P2P, PINIcon, PrivacyIcon } from '../../../../public/assets/icons'

const page = () => {
  const progress = 20;
  const handleOpenModal = () => {
    alert('i am a modal')
  }
  const Account = [
    {icon:<OutlinedProfile/>, listText:'Identity verification', onClick: handleOpenModal,},
    {icon:<BankBuilding/>, listText:'Manage bank', onClick: handleOpenModal,},
    {icon:<CreditCard/>, listText:'Manage cards', onClick: handleOpenModal,},
    {icon:<P2P/>, listText:'Next of Kin', onClick: handleOpenModal,},
  ]
  const Security = [
    {icon:<LockIcon/>, listText:'Change password', onClick: handleOpenModal,},
    {icon:<PINIcon/>, listText:'Change PIN', onClick: handleOpenModal,},
  ]
  const Legal = [
    {icon:<PrivacyIcon/>, listText:'Privacy policy', onClick: handleOpenModal,},
    {icon:<PrivacyIcon/>, listText:'Terms', onClick: handleOpenModal,},
    {icon:<FAQIcon/>, listText:'FAQ', onClick: handleOpenModal,},
  ]

  return (
    <DashboardContainer PageTItle='Settings'>
      <div className='grid grid-cols-2 gap-3'>
        <Card Title='Profile' height='315px'>
          <div className='grid place-items-center p-3 w-full text-[#14013A]'>
            <Image alt='' src={profile} className='w-[60px] mb-4' />
            <p className='font-[500] mb-[3px]'>Freeborn Ebosele</p>
            <p className='text-[#5C556C] font-[450]'>@freebornehirhere@gmail.com</p>
            <DefaultButton customStyle='bg-[#F5F1FE] border border-[#E6DAFC] w-[100px] text-[#8046F2] font-[550] text-[14px] mt-2' onClick={''} text='Edit Profile' type='solid' />
          </div>

          <div className='bg-[#ECF9F3] rounded px-2 py-4 flex items-center justify-between mt-2'>
            <GreenProfile/>

            <div className='w-[90%]'>
              <p className='text-[#14013A] text-[15.5px] font-[500] mb-1'>Complete account setup</p>

              <div className='w-full bg-white h-1 rounded-full relative'>
                <div className={`bg-[#17B26A] absolute top-0 left-0 rounded h-full w-[${progress}%]`}></div>
              </div>
              <p className='text-[14px] font-[450] text-[#14013A]'>
              {progress}% Done
              </p>
            </div>
          </div>
        </Card>
        <Card Title='Account' height='315px'>
          <div className='p-3 h-full'>
            <ul className=''>
            {Account.map((list, i) => (
              <li className='flex justify-between items-center cursor-pointer h-[64px] mb-2' key={i} onClick={list.onClick}>
                <div className='flex items-center'>
                {list.icon}
                <p className='ml-2 font-[470] text-[#14013A]'>{list.listText}</p>
                </div>

                <NextIcon/>
              </li>
            ))}
            </ul>

          </div>
        </Card>
        <Card Title='Security' height='232px'>
        <div className='p-3 h-full'>
            <ul className=''>
            {Security.map((list, i) => (
              <li className='flex justify-between items-center cursor-pointer h-[64px] mb-2' key={i} onClick={list.onClick}>
                <div className='flex items-center'>
                {list.icon}
                <p className='ml-2 font-[470] text-[#14013A]'>{list.listText}</p>
                </div>

                <NextIcon/>
              </li>
            ))}
            </ul>

          </div>
        </Card>
        <Card Title='Legal' height='232px'>
        <div className='p-3 h-full'>
            <ul className=''>
            {Legal.map((list, i) => (
              <li className='flex justify-between items-center cursor-pointer h-[64px] mb-2' key={i} onClick={list.onClick}>
                <div className='flex items-center'>
                {list.icon}
                <p className='ml-2 font-[470] text-[#14013A]'>{list.listText}</p>
                </div>

                <NextIcon/>
              </li>
            ))}
            </ul>

          </div>
        </Card>
      </div>
    </DashboardContainer>
  )
}

export default page
