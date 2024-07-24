"use client"
import React from 'react';
import { useState } from 'react';
import DashboardContainer from '@/components/dashboard/dashboardContainer';
import { BalanceCard } from '@/components/reusable/card/Card';
import {FundWalletIcon, HideIconWhite, ShowIconWhite, WithdrawIcon } from '../../../../public/assets/icons';

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DashboardContainer
      PageTItle='Dashboard'
    >
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-4">
        <div className="inline-flex space-x-4 bg-white">
          <BalanceCard customStyle='bg-[#4E05DC]' styleName='walletBg' CardTitle='Wallet Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite/> : <ShowIconWhite/>} Balance={show? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='Fund wallet' button2='Withdraw'  buttonIcon1={<FundWalletIcon />} buttonIcon2={<WithdrawIcon/>} styling1='bg-[#14013A]' styling2='bg-[#fff] text-[#8046F2]'/>
          <BalanceCard customStyle='bg-[#14013A]' styleName='' CardTitle='Savings Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite/> : <ShowIconWhite/>} Balance={show? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='See Plans' button2='Create new plan' buttonIcon1={''} buttonIcon2={''} styling1='bg-[#fff] text-[#14013A]' styling2='bg-[#fff] text-[#14013A]'/>
          <BalanceCard customStyle='bg-[#14013A]' styleName='' CardTitle='Investment Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite/> : <ShowIconWhite/>} Balance={show? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='See Plans' button2='Create new plan'  buttonIcon1={''} buttonIcon2={''} styling1='bg-[#fff] text-[#14013A]' styling2='bg-[#fff] text-[#14013A]'/>
        </div>
      </div>

      <div>

      </div>
    </DashboardContainer>
  );
};

export default Page;
