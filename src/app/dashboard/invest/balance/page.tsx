"use client"
import React, { useState } from 'react'
import InvestContainer from '../page'
import Image from 'next/image';
import cash from '../../../../../public/assets/images/cash.png'
import { CableIcon, ElectricIcon, FundWalletIcon, HideIcon, InternetIcon, NetworkIcon, NextIcon, NextIconPurple, ShowIcon, WithdrawIcon } from '../../../../../public/assets/icons';
import { BalanceCard, ChildCard, DefaultCard } from '@/components/reusable/card/Card'
// import { useNavigate } from 'react-router-dom';
import { CustomButton } from '@/components/reusable/button/Button';

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const investmentCard = [
    { title: 'Sukuk bonds', },
    { title: 'Ethical Index', },
    { title: 'Murabaha', },
  ]

  const investmentPlan = [
    { title: 'Sukuk bonds', text: 'Lorem ipsum sit amet dolor relictum expurgartionis inferalis, Lorem ipsum sit amet dolor relictum expurgartionis inferalis', color: 'bg-[#F5F1FE] border border-1 border-[#E6DAFC]' },
    { title: 'Ethical Index', text: 'Lorem ipsum sit amet dolor relictum expurgartionis inferalis, Lorem ipsum sit amet dolor relictum expurgartionis inferalis', color: 'bg-[#ECF9F3] border border-1 border-[#D1F0E1]'  },
    { title: 'Murabaha', text: 'Lorem ipsum sit amet dolor relictum expurgartionis inferalis, Lorem ipsum sit amet dolor relictum expurgartionis inferalis', color: 'bg-[#FEF4E6] border border-1 border-[#FDE9CE]' },
  ]

  return (
    <InvestContainer>
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <BalanceCard customStyle='text-black p-0 ml-[-10px]' styleName='' CardTitle='Investment Total' hideBalance={handleClick} BalanceIcon={show ? <HideIcon /> : <ShowIcon />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='' button2='' buttonIcon1={''} buttonIcon2={''} styling1='' styling2='' />

        <ChildCard CardTitle='My Investments' cardStyle='mt-[-7%] remove-shadow'>
          <div className='w-full defaultCard'>
            {investmentCard.map((card, key) => (
              <CustomButton ButtonStyling='w-full flex items-center justify-between text-start ml-2 text-[14px]' Context={<Image alt='' className='w-[45px]' src={cash} />} customStyle='shadow-sm border-1 border rounded-[8px] mt-3 w-[30%] buttonChild' icon={<NextIcon />} onClick={''} text={<div className='flex items-center mt-1'>Balance <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span> <p className='text-[#17B26A] font-[570]'>NGN 175,000</p></div>} type='solid' childDiv='' title={card.title} key={key} />
            ))}
          </div>
        </ChildCard>

        <ChildCard CardTitle='Create a new investment' cardStyle=' remove-shadow'>
          <div className='w-full flex items-start defaultCard'>
            {investmentPlan.map((card, key) => (
              <div className='w-[32%]'>
                <CustomButton ButtonStyling='w-full flex items-center justify-between text-start ml-2 text-[14px]' Context={<Image alt='' className='w-[55px] rounded-full mb-1 ml-[-79%]' src={cash} />} customStyle={`shadow-sm border-1 border rounded-[8px] mt-3 w-[30%] items-start flex-col text-wrap buttonChild ${card.color}`} icon={''} onClick={''} text={card.text} type='solid' childDiv='text-wrap w-full' title={card.title} key={key} />
              </div>
            ))}
          </div>
        </ChildCard>
      </div>
    </InvestContainer>
  )
}

export default Page