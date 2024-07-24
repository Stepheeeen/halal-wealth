"use client"
import React from 'react';
import { useState } from 'react';
import DashboardContainer from '@/components/dashboard/dashboardContainer';
import { BalanceCard, ChildCard, DefaultCard } from '@/components/reusable/card/Card';
import { CableIcon, ElectricIcon, FundWalletIcon, HideIconWhite, InternetIcon, NetworkIcon, NextIcon, ShowIconWhite, WithdrawIcon } from '../../../../public/assets/icons';
import { CustomButton } from '@/components/reusable/button/Button';
import Image from 'next/image';
import PieChartImage from '../../../../public/assets/images/pieChartImage.png'

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DashboardContainer
      PageTItle='Dashboard'
    >
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-4">
        <div className="inline-flex space-x-4 bg-white">
          <BalanceCard customStyle='bg-[#4E05DC]' styleName='walletBg' CardTitle='Wallet Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='Fund wallet' button2='Withdraw' buttonIcon1={<FundWalletIcon />} buttonIcon2={<WithdrawIcon />} styling1='bg-[#14013A]' styling2='bg-[#fff] text-[#8046F2]' />
          <BalanceCard customStyle='bg-[#14013A]' styleName='' CardTitle='Savings Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='See Plans' button2='Create new plan' buttonIcon1={''} buttonIcon2={''} styling1='bg-[#fff] text-[#14013A]' styling2='bg-[#fff] text-[#14013A]' />
          <BalanceCard customStyle='bg-[#14013A]' styleName='' CardTitle='Investment Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='See Plans' button2='Create new plan' buttonIcon1={''} buttonIcon2={''} styling1='bg-[#fff] text-[#14013A]' styling2='bg-[#fff] text-[#14013A]' />
        </div>
      </div>

      <div className='mt-3 py-2 flex items-center justify-between'>
        <ChildCard
          CardTitle='Pay Bills faster'
          cardStyle='w-[43%]'
          >

          <div className='flex items-center ml-[-10px] mt-3'>
            <CustomButton Context={<NetworkIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={''} text='Airtime & Data' type='ghost' ButtonStyling='mt-1' icon={''}  childDiv='' title=''/>
            <CustomButton Context={<CableIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={''} text='Cable TV' type='ghost' ButtonStyling='mt-1' icon={''}  childDiv='' title=''/>
            <CustomButton Context={<InternetIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={''} text='Internet' type='ghost' ButtonStyling='mt-1' icon={''}  childDiv='' title=''/>
            <CustomButton Context={<ElectricIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={''} text='Electricity' type='ghost' ButtonStyling='mt-1' icon={''}  childDiv='' title=''/>
          </div>

          <CustomButton ButtonStyling='w-[93%] flex items-center justify-between text-start ml-2 text-[14px]' Context={<Image src={PieChartImage} alt='' className='h-[50px] w-[50px]' />} customStyle='bg-[#D1F0E1] rounded-[8px] mt-3' icon={<NextIcon />} onClick={''} text='Get item and pay in installments' type='solid' childDiv='' title='Asset FInancing '/>
        </ChildCard>

        <ChildCard
          CardTitle='Top investments today'
          cardStyle='w-[56%]'>
          <div className=' inline-flex space-x-4 bg-white'>
            
          </div>
        </ChildCard>
      </div>
    </DashboardContainer>
  );
};

export default Page;
