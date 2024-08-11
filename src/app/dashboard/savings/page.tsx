"use client"
import React, { useState } from 'react'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { HideIcon, ShowIcon } from '../../../../public/assets/icons'
import { BalanceCard } from '@/components/reusable/card/Card'

const page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <DashboardContainer PageTItle='Save'>
      <BalanceCard customStyle='text-black p-0 ml-[-10px]' styleName='' CardTitle='Investment Total' hideBalance={handleClick} BalanceIcon={show ? <HideIcon /> : <ShowIcon />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='' button2='' buttonIcon1={''} buttonIcon2={''} styling1='' styling2='' />
    </DashboardContainer>
  )
}

export default page
