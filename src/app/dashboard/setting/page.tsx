"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Card, EditProfile, IdentityVerification } from '@/components/settings/modalContent'
import profile from '../../../../public/assets/images/profileImage.svg'
import NIN from '../../../../public/assets/images/NIN.png'
import License from '../../../../public/assets/images/License.png'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { DefaultButton } from '@/components/reusable/button/Button'
import { BankBuilding, CountryIcon, CreditCard, FAQIcon, GreenProfile, LockIcon, NextIcon, OutlinedProfile, P2P, PINIcon, PrivacyIcon } from '../../../../public/assets/icons'
import { CustomModal } from '@/components/reusable/modal/modal'
import { DefaultInput, IconInput, OptionsSelect } from '@/components/reusable/input/Input'

const page = () => {
  const [editProfile, setEditProfile] = useState(false)
  const [identityVerification, setIdentityVerification] = useState(false)
  const [manageBank, setManageBank] = useState(false)
  const [nextOfKin, setNextOfKin] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [changePIN, setChangePIN] = useState(false)
  const [issuedID, setIssueID] = useState(false)
  const progress = 20;
  const handleOpenModal = () => {
    alert('i am a modal')
  }
  const Account = [
    { icon: <OutlinedProfile />, listText: 'Identity verification', onClick: () => { setIdentityVerification(true) }, },
    { icon: <BankBuilding />, listText: 'Manage bank', onClick: () => { setManageBank(true) }, },
    { icon: <CreditCard />, listText: 'Manage cards', onClick: handleOpenModal, },
    { icon: <P2P />, listText: 'Next of Kin', onClick: () => { setNextOfKin(true) }, },
  ]
  const Security = [
    { icon: <LockIcon />, listText: 'Change password', onClick: () => { setChangePassword(true) }, },
    { icon: <PINIcon />, listText: 'Change PIN', onClick: () => { setChangePIN(true) }, },
  ]
  const Legal = [
    { icon: <PrivacyIcon />, listText: 'Privacy policy', onClick: handleOpenModal, },
    { icon: <PrivacyIcon />, listText: 'Terms', onClick: handleOpenModal, },
    { icon: <FAQIcon />, listText: 'FAQ', onClick: handleOpenModal, },
  ]
  const options = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  const relationship = [
    { value: "Single", text: "Single" },
    { value: "Married", text: "Married" },
    { value: "Divorced", text: "Divorced" },
    { value: "Abandoned", text: "Abandoned" },
  ];

  // modals
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('NIN');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <DashboardContainer PageTItle='Settings'>
      <div className='grid grid-cols-2 gap-3'>
        <Card Title='Profile' height='315px'>
          <div className='grid place-items-center p-3 w-full text-[#14013A]'>
            <Image alt='' src={profile} className='w-[60px] mb-4' />
            <p className='font-[500] mb-[3px]'>Freeborn Ebosele</p>
            <p className='text-[#5C556C] font-[450]'>@freebornehirhere@gmail.com</p>

            <div className='w-[30%]'>
              <DefaultButton customStyle='bg-[#F5F1FE] border border-[#E6DAFC] w-[100px] text-[#8046F2] font-[550] text-[14px] mt-2' onClick={() => { setEditProfile(true) }} text='Edit Profile' type='solid' />
            </div>
          </div>

          <div className='bg-[#ECF9F3] rounded px-2 py-4 flex items-center justify-between mt-2'>
            <GreenProfile />

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

                  <NextIcon />
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

                  <NextIcon />
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

                  <NextIcon />
                </li>
              ))}
            </ul>

          </div>
        </Card>
      </div>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={editProfile} modalTitle='Edit profile' onClose={() => { setEditProfile(false) }}>
        <EditProfile />
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={identityVerification} modalTitle='Identity verification' onClose={() => { setIdentityVerification(false) }}>
        <IdentityVerification onClick3={() => { setIdentityVerification(false); setIssueID(true); }} />
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={issuedID} modalTitle='Upload Government issued ID' onClose={() => { setIssueID(false) }}>
        <div className="w-full max-w-md py-4">
          <p className='text-[14px] text-black px-1'>
            Chooose ID option
          </p>
          <h1 className='font-[500] text-[16px] mb-3 text-black px-1'>
            Choose one of the document option to verifyyour identity.
          </h1>
          <div
            onClick={() => setSelected('NIN')}
            className={`px-3 py-6 mb-4 border rounded-lg cursor-pointer ${selected === 'NIN' ? 'bg-[#F5F1FE] border-[#D5C1FB]' : 'bg-white'}`}
          >
            <div className="flex justify-between items-center">
              <span className='font-semibold'>National Identification Number (NIN)</span>
              <span
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === 'NIN' ? 'border-[#8046F2]' : 'border-gray-400'}`}
              >
                {selected === 'NIN' && <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>}
              </span>
            </div>
          </div>

          <div
            onClick={() => setSelected('License')}
            className={`px-3 py-6 mb-4 border rounded-lg cursor-pointer ${selected === 'License' ? 'bg-[#F5F1FE] border-[#D5C1FB]' : 'bg-white'}`}
          >
            <div className="flex justify-between items-center">
              <span className='font-semibold'>Driver’s license</span>
              <span
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selected === 'License' ? 'border-[#8046F2]' : 'border-gray-400'}`}
              >
                {selected === 'License' && <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>}
              </span>
            </div>
          </div>


          <DefaultButton
            type="solid"
            text='Continue'
            customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[49%]"
            onClick={handleOpen}
          />
        </div>
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={open} modalTitle={selected === 'NIN' ? 'National Identification Number (NIN)' : 'Driver’s license'} onClose={() => { setOpen(false) }}>
        {selected === 'NIN' ?
          <div className='w-full max-w-md py-1'>
            <h1 className='font-[500] text-[14px] mb-1 text-black px-1'>
              Please enter the ID number displayed on your NIN slip as marked above.
            </h1>
            <p className='text-[14px] text-black px-1 mb-2'>
              To retreive your NIN, Kindly dial *346# from your registered mobile number.
            </p>

            <Image alt='' src={NIN} className='mb-4' />

            <DefaultInput
              size="lg"
              value="placeholder"
              type="text"
              CustomStyle=" border"
              label="Enter NIN"
            />

            <DefaultButton
              type="solid"
              text='Submit'
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[80px]"
              onClick={''}
            />
          </div>
          :
          <div className='w-full max-w-md py-1'>
            <h1 className='font-[450] text-[16px] mb-3 text-black px-1'>
              Please enter the ID number displayed on your Driver’s license as marked above.
            </h1>

            <Image alt='' src={License} className='mb-6' />

            <DefaultInput
              size="lg"
              value="placeholder"
              type="text"
              CustomStyle=" border"
              label="Enter Identification number"
            />

            <DefaultButton
              type="solid"
              text='Submit'
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[90px]"
              onClick={''}
            />
          </div>
        }
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={manageBank} modalTitle='Manage Bank' onClose={() => { setManageBank(false) }}>
        hello
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={nextOfKin} modalTitle='Next if Kin' onClose={() => { setNextOfKin(false) }}>
        <div className='grid place-items-center pb-4'>

          <div className='py-9'>
            <div className='rounded-full p-2 bg-[#F5F1FE]'>
              <P2P />
            </div>

          </div>

          <div className='w-full mt-2'>
            <DefaultInput
              size="lg"
              value="placeholder"
              type="text"
              CustomStyle="mb-4 border"
              label="First name"
            />
            <DefaultInput
              size="lg"
              value="placeholder"
              type="text"
              CustomStyle="mb-4 border"
              label="Last name"
            />
            <IconInput
              onChange={''}
              value="000-000-0000"
              size="lg"
              type="tel"
              icon={<CountryIcon />}
              RighIcon={""}
              handleClick={""}
              CustomStyle="pl-[40px] border"
              label="Phone number"
            />
            <DefaultInput
              size="lg"
              value="placeholder"
              type="text"
              CustomStyle="mb-4 border"
              label="Email Address"
            />
            <OptionsSelect
              CustomStyle="mb-4 border"
              label="Relationship"
              options={relationship}
            />
            <OptionsSelect
              CustomStyle="mb-4 border"
              label="Gender"
              options={options}
            />
          </div>

          <DefaultButton
            type="solid"
            text='Save Changes'
            customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-10"
            onClick={''}
          />
        </div>
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={changePassword} modalTitle='Change Password' onClose={() => { setChangePassword(false) }}>
        hello
      </CustomModal>

      <CustomModal ModalStyling='overflow-x-hidden overflow-y-scroll' isOpen={changePIN} modalTitle='Change PIN' onClose={() => { setChangePIN(false) }}>
        hello
      </CustomModal>
    </DashboardContainer>
  )
}

export default page
