"use client"
import React, { useState } from 'react'
import InvestContainer from '../page'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import cash from '../../../../../public/assets/images/cash.png'
import {
  FundWalletIcon,
  HideIcon,
  HideIconWhite,
  NextIcon,
  ShowIcon,
  ShowIconWhite,
  TransactionStatus,
  WarningIcon,
  WithdrawIcon
} from '../../../../../public/assets/icons';
import { BalanceCard, ChildCard } from '@/components/reusable/card/Card'
import ChartLg from '../../../../../public/assets/images/Chart-Contain.png'
import { CustomButton } from '@/components/reusable/button/Button';
import { CustomModal } from '@/components/reusable/modal/modal';

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [balance, setBalance] = useState(false);
  const BalanceOpen = () => setBalance(true);
  const BalanceClose = () => setBalance(false);

  const router = useRouter();

  const investmentCard = [
    { title: 'Sukuk bonds' },
    { title: 'Ethical Index' },
    { title: 'Murabaha' },
  ];

  const investmentPlan = [
    {
      title: 'Sukuk bonds',
      text: 'Lorem ipsum sit amet dolor relictum expurgartionis inferalis, Lorem ipsum sit amet dolor relictum expurgartionis inferalis',
      color: 'bg-[#F5F1FE] border border-1 border-[#E6DAFC]'
    },
    {
      title: 'Ethical Index',
      text: 'Lorem ipsum sit amet dolor relictum expurgartionis inferalis, Lorem ipsum sit amet dolor relictum expurgartionis inferalis',
      color: 'bg-[#ECF9F3] border border-1 border-[#D1F0E1]'
    },
    {
      title: 'Murabaha',
      text: 'Lorem ipsum sit amet dolor relictum expurgartionis inferalis, Lorem ipsum sit amet dolor relictum expurgartionis inferalis',
      color: 'bg-[#FEF4E6] border border-1 border-[#FDE9CE]'
    },
  ];

  const history = [
    { status: <TransactionStatus />, amount: '100', date: '18 March 2022' },
    { status: <TransactionStatus />, amount: '100', date: '18 March 2022' },
    { status: <TransactionStatus />, amount: '100', date: '18 March 2022' },
  ];

  return (
    <InvestContainer>
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <BalanceCard
          customStyle='text-black p-0 ml-[-10px]'
          styleName=''
          CardTitle='Investment Total'
          hideBalance={handleClick}
          BalanceIcon={show ? <HideIcon /> : <ShowIcon />}
          Balance={show ? '₦ 100,000' : '****'}
          button1=''
          button2=''
          buttonIcon1={''}
          buttonIcon2={''}
          handleClick1={''}
          handleClick2={''}
          styling1=''
          styling2=''

        />

        <ChildCard CardTitle='My Investments' cardStyle='mt-[-7%] remove-shadow'>
          <div className='w-full defaultCard'>
            {investmentCard.map((card, key) => (
              <CustomButton
                childDiv=''
                key={key}
                ButtonStyling='w-full flex items-center justify-between text-start ml-2 text-[14px]'
                Context={<Image alt='' className='w-[45px]' src={cash} />}
                customStyle='shadow-sm border-1 border rounded-[8px] mt-3 w-[30%] buttonChild'
                icon={<NextIcon />}
                text={<div className='flex items-center mt-1'>Balance <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span> <p className='text-[#17B26A] font-[570]'>NGN 175,000</p></div>}
                type='solid'
                onClick={BalanceOpen}
                title={card.title}
              />
            ))}
          </div>
        </ChildCard>

        <ChildCard CardTitle='Create a new investment' cardStyle=' remove-shadow'>
          <div className='w-full flex items-start defaultCard'>
            {investmentPlan.map((card, key) => (
              <div key={key} className='w-[32%]'>
                <CustomButton
                  ButtonStyling='w-full flex items-center justify-between text-start ml-2 text-[14px]'
                  Context={<Image alt='' className='w-[55px] mb-1 ml-[-79%]' src={cash} />}
                  customStyle={`shadow-sm border-1 border rounded-[8px] mt-3 w-[30%] items-start flex-col text-wrap buttonChild ${card.color}`}
                  icon={''}
                  onClick={() => { router.push('/dashboard/invest/balance/id') }}
                  text={card.text}
                  type='solid'
                  childDiv='text-wrap w-full h1'
                  title={card.title}
                />
              </div>
            ))}
          </div>
        </ChildCard>
      </div>

      <CustomModal
        ModalStyling='overflow-scroll'
        isOpen={balance}
        modalTitle='Lotus Halal fixed income fund'
        onClose={BalanceClose}
      >
        <div className="w-full overflow-scroll">
          <BalanceCard
            handleClick1={''}
            handleClick2={''}
            customStyle='bg-[#4E05DC] grid place-items-center'
            styleName='walletBg width'
            CardTitle='Wallet Balance'
            hideBalance={handleClick}
            BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />}
            Balance={show ? '₦ 100,000' : '****'}
            button1='Fund wallet'
            button2='Withdraw'
            buttonIcon1={<FundWalletIcon />}
            buttonIcon2={<WithdrawIcon />}
            styling1='bg-[#14013A] mt-[-5px]'
            styling2='bg-[#fff] text-[#8046F2] mt-[-5px]'
          />

          <div className='flex items-center justify-center w-[95%] text-[16px] my-3'>
            <h1 className='text-[#17B26A] font-[570]'>NGN 175,000</h1>
            <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span>
            <p className='text-[15px] font-[450] text-[#5C556C] ml-1'>Earned this week</p>
          </div>

          <div className='bg-[#ECF9F3] p-1 mt-3'>
            <div className='border border-[#8BD8B4] bg-[#ECF9F3] rounded-sm flex px-1 py-2'>
              <div className="flex-shrink-0 p-2">
                <WarningIcon />
              </div>
              <div className="ml-2">
                <h3 className="text-sm font-semibold text-gray-800">Withdrawal info</h3>
                <p className="text-sm text-gray-600">You can’t withdraw until investment matures on <strong className='font-[550] text-black'>Dec 07, 2022</strong></p>
              </div>
            </div>
          </div>

          <Image alt='' src={ChartLg} className='mt-[20px]' />

          <ChildCard CardTitle="Recent activities" cardStyle="mt-5 shadow">
            <ul>
              {history.map((card, i) => (
                <li key={i} className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    {card.status}
                    <div className="ml-2 grid">
                      <p className="text-[#14013A] font-[500] text-[16px]">NGN {card.amount}</p>
                      <p className="text-[#17B26A] font-[450] text-[14px]">Success</p>
                    </div>
                  </div>
                  <p className="text-[#5C556C] text-[14px] font-[470]">{card.date}</p>
                </li>
              ))}
            </ul>
          </ChildCard>
        </div>
      </CustomModal>
    </InvestContainer>
  )
}

export default Page;
