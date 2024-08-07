"use client"
import React, { useState } from 'react'
import InvestContainer from '../page'
import { CableIcon, ElectricIcon, FundWalletIcon, HideIcon, InternetIcon, NetworkIcon, NextIcon, NextIconPurple, ShowIcon, WithdrawIcon } from '../../../../../public/assets/icons';
import { BalanceCard, ChildCard } from '@/components/reusable/card/Card'
import DashboardContainer from '@/components/dashboard/dashboardContainer';

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    // <InvestContainer>
    //       <BalanceCard customStyle='text-black p-0 ml-[-10px]' styleName='' CardTitle='Investment Total' hideBalance={handleClick} BalanceIcon={show ? <HideIcon /> : <ShowIcon />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='' button2='' buttonIcon1={''} buttonIcon2={''} styling1='' styling2='' />

    //     <ChildCard CardTitle='My Investments' cardStyle='mt-[-7%]'>
    //       {/* <h1 className='font-[620] text-[50px] mb-3'>₦ 100,000</h1> */}
    //       another useless card
    //     </ChildCard>
    // </InvestContainer>
    <DashboardContainer PageTItle='Invest'>
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <BalanceCard customStyle='text-black p-0 ml-[-10px]' styleName='' CardTitle='Investment Total' hideBalance={handleClick} BalanceIcon={show ? <HideIcon /> : <ShowIcon />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='' button2='' buttonIcon1={''} buttonIcon2={''} styling1='' styling2='' />

        <ChildCard CardTitle='My Investments' cardStyle='mt-[-7%]'>
          {/* <h1 className='font-[620] text-[50px] mb-3'>₦ 100,000</h1> */}      another useless card
        </ChildCard>
      </div>
    </DashboardContainer>
  )
}

export default Page