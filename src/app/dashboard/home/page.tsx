"use client"
import React from 'react';
import { useState } from 'react';
import DashboardContainer from '@/components/dashboard/dashboardContainer';
import { BalanceCard, ChildCard, CustomCard, DefaultCard } from '@/components/reusable/card/Card';
import { CableIcon, ElectricIcon, FundWalletIcon, HideIconWhite, InternetIcon, NetworkIcon, NextIcon, NextIconPurple, ShowIconWhite, WithdrawIcon } from '../../../../public/assets/icons';
import { CustomButton, DefaultButton } from '@/components/reusable/button/Button';
import Image from 'next/image';
import PieChartImage from '../../../../public/assets/images/pieChartImage.png'
import Chart from '../../../../public/assets/images/chart.png'
import Bag from '../../../../public/assets/images/savingsImage.png'
import cash from '../../../../public/assets/images/cash.png'
import hajj from '../../../../public/assets/images/hajj.png'
import woman from '../../../../public/assets/images/woman.png'
import couple from '../../../../public/assets/images/couple.png'
import eid from '../../../../public/assets/images/eid.png'
import noTransaction from '../../../../public/assets/images/noTransaction.png'
import Link from 'next/link';
import { CustomModal } from '@/components/reusable/modal/modal';
import { BankTransfer, FundWallet, FundWithCard, Withdrawal } from '@/components/dashboard/content/modalContent';
import { DefaultPinInput } from '@/components/reusable/input/Input';

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // fund wallet modal function
  const [fund, setFund] = useState(false);
  const FundOpen = () => setFund(true);
  const FundClose = () => setFund(false);

  // airtime and data modal function
  const [airtime, setAirtime] = useState(false);
  const AirtimeOpen = () => setAirtime(true);
  const AirtimeClose = () => setAirtime(false);

  // withdraw funds modal function
  const [withdraw, setWithdraw] = useState(false);
  const WithdrawOpen = () => setWithdraw(true);
  const WithdrawClose = () => setWithdraw(false);

  // cable modal function
  const [cable, setCable] = useState(false);
  const CableOpen = () => setCable(true);
  const CableClose = () => setCable(false);

  // Internet modal function
  const [internet, setInternet] = useState(false);
  const InternetOpen = () => setInternet(true);
  const InternetClose = () => setInternet(false);

  // Electricity modal function
  const [electricity, setElectricity] = useState(false);
  const ElectricityOpen = () => setElectricity(true);
  const ElectricityClose = () => setElectricity(false);

  // Fund with card modal function
  const [fundWithCard, setFundWithCard] = useState(false);
  // const FundWithCardOpen = () => setFundWithCard(true);
  const FundWithCardClose = () => setFundWithCard(false);

  // Bank Transfer modal function
  const [Transfer, setTransfer] = useState(false);
  // const TransferOpen = () => setTransfer(true);
  const TransferClose = () => setTransfer(false);

  // PIN modal function
  const [pin, setPin] = useState(false);
  const PinOpen = () => setPin(true);
  const PinClose = () => setPin(false);

  // Handle bank transfer secondary modal
  const HandleTransferOpen = () => {
    setFund(false);
    setTransfer(true);
  }

  // Handle fund with card secondary modal
  const HandleFundWithCardOpen = () => {
    setFund(false);
    setFundWithCard(true);
  }


  return (
    <DashboardContainer
      PageTItle='Dashboard'
    >
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-4">
        <div className="inline-flex space-x-4 bg-white">
          <BalanceCard customStyle='bg-[#4E05DC]' styleName='walletBg' CardTitle='Wallet Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />} Balance={show ? '₦ 100,000' : '****'} handleClick1={FundOpen} handleClick2={WithdrawOpen} button1='Fund wallet' button2='Withdraw' buttonIcon1={<FundWalletIcon />} buttonIcon2={<WithdrawIcon />} styling1='bg-[#14013A]' styling2='bg-[#fff] text-[#8046F2]' />
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
            <CustomButton Context={<NetworkIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={AirtimeOpen} text='Airtime & Data' type='ghost' ButtonStyling='mt-1' icon={''} childDiv='' title='' />
            <CustomButton Context={<CableIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={CableOpen} text='Cable TV' type='ghost' ButtonStyling='mt-1' icon={''} childDiv='' title='' />
            <CustomButton Context={<InternetIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={InternetOpen} text='Internet' type='ghost' ButtonStyling='mt-1' icon={''} childDiv='' title='' />
            <CustomButton Context={<ElectricIcon />} customStyle='flex flex-col text-[13px] font-[500]' onClick={ElectricityOpen} text='Electricity' type='ghost' ButtonStyling='mt-1' icon={''} childDiv='' title='' />
          </div>

          <CustomButton ButtonStyling='w-[93%] flex items-center justify-between text-start ml-2 text-[14px]' Context={<Image src={PieChartImage} alt='' className='h-[50px] w-[50px]' />} customStyle='bg-[#ECF9F3] border border-1 border-[#D1F0E1] rounded-[8px] mt-3' icon={<NextIcon />} onClick={''} text='Get item and pay in installments' type='solid' childDiv='' title='Asset FInancing ' />
        </ChildCard>

        <ChildCard
          CardTitle='Top investments today'
          cardStyle='w-[56%]'>
          <div className='w-[100%] whitespace-nowrap overflow-x-auto'>
            <div className=' inline-flex space-x-4 bg-white'>
              <DefaultCard cardStyle='h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md'>
                <div className='flex items-center'>
                  <div className='w-[25px] h-[25px] rounded-sm bg-[#14013A]'>

                  </div>
                  <h1 className='font-[500] text-[19px] text-[#14013A] text-wrap ml-2'>
                    Lotus Halal Fixed Income Fund
                  </h1>
                </div>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div>
                    <h1 className='text-[#17B26A] text-[17px] font-[600]'>4.21 - 6.12%</h1>
                    <p className='text-[#5C556C] text-[14px] font-[500]'>Estimated returns</p>
                  </div>

                  <Image alt='' src={Chart} className='w-[30%]' />
                </div>

                <div className='flex items-center justify-end'>
                  <Link href={'#'} className='text-[#8046F2] flex items-center font-[400] mt-4'>
                    Learn more <span> <NextIconPurple /> </span>
                  </Link>
                </div>
              </DefaultCard>
              <DefaultCard cardStyle='h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md'>
                <div className='flex items-center'>
                  <div className='w-[25px] h-[25px] rounded-sm bg-[#14013A]'>

                  </div>
                  <h1 className='font-[500] text-[19px] text-[#14013A] text-wrap ml-2'>
                    Lotus Halal Fixed Income Fund
                  </h1>
                </div>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div>
                    <h1 className='text-[#17B26A] text-[17px] font-[600]'>4.21 - 6.12%</h1>
                    <p className='text-[#5C556C] text-[14px] font-[500]'>Estimated returns</p>
                  </div>

                  <Image alt='' src={Chart} className='w-[30%]' />
                </div>

                <div className='flex items-center justify-end'>
                  <Link href={'#'} className='text-[#8046F2] flex items-center font-[400] mt-4'>
                    Learn more <span> <NextIconPurple /> </span>
                  </Link>
                </div>
              </DefaultCard>
              <DefaultCard cardStyle='h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md'>
                <div className='flex items-center'>
                  <div className='w-[25px] h-[25px] rounded-sm bg-[#14013A]'>

                  </div>
                  <h1 className='font-[500] text-[19px] text-[#14013A] text-wrap ml-2'>
                    Lotus Halal Fixed Income Fund
                  </h1>
                </div>
                <div className='flex items-center justify-between mt-[10px]'>
                  <div>
                    <h1 className='text-[#17B26A] text-[17px] font-[600]'>4.21 - 6.12%</h1>
                    <p className='text-[#5C556C] text-[14px] font-[500]'>Estimated returns</p>
                  </div>

                  <Image alt='' src={Chart} className='w-[30%]' />
                </div>

                <div className='flex items-center justify-end'>
                  <Link href={'#'} className='text-[#8046F2] flex items-center font-[400] mt-4'>
                    Learn more <span> <NextIconPurple /> </span>
                  </Link>
                </div>
              </DefaultCard>
            </div>
          </div>

        </ChildCard>
      </div>

      <div className='flex items-center justify-between mt-2'>
        <ChildCard CardTitle='My savings' cardStyle='w-[50%]'>
          <CustomButton ButtonStyling='w-[93%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]' Context={<Image src={Bag} alt='' className='h-[50px] w-[50px]' />} customStyle='shadow rounded-[8px] mt-1' icon={<NextIcon />} onClick={''} text='Savings total' type='solid' childDiv='flex flex-col-reverse balanceDiv' title='NGN 40,000' />

          <ChildCard CardTitle='Create a new savings plan' cardStyle='shadow-none p-0 mt-3'>
            <div className='flex items-center justify-between w-full mb-1'>
              <CustomButton ButtonStyling='w-[96%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]' Context={<Image src={cash} alt='' className='h-[35px] w-[35px] ml-[-9px] mt-[-14px]' />} customStyle='bg-[#F5F1FE] rounded mt-1 border border-1 border-[#E6DAFC] w-[50%]' icon={''} onClick={''} text='Create a custom savings plan to suit your needs' type='solid' childDiv='savingsDiv' title='Custom savings' />
              <CustomButton ButtonStyling='w-[94%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]' Context={<Image src={hajj} alt='' className='h-[35px] w-[35px] ml-[-9px] mt-[-14px]' />} customStyle='bg-[#ECF9F3] rounded ml-[8px] mt-1 border border-1 border-[#D1F0E1] w-[50%]' icon={''} onClick={''} text='Savings plan to help you achieve your goals' type='solid' childDiv=' savingsDiv' title='Hajj & Umrah' />
            </div>

            <CustomButton ButtonStyling='w-[96%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]' Context={<Image src={woman} alt='' className='h-[35px] w-[35px] ml-[-9px] mt-[-14px]' />} customStyle='bg-[#F5F1FE] rounded mt-1 border border-1 border-[#E6DAFC]' icon={''} onClick={''} text='Savings plan to help you achieve your goals' type='solid' childDiv=' savingsDiv' title='Aqeeqah' />

            <div className='flex items-center justify-between w-full mt-1'>
              <CustomButton ButtonStyling='w-[94%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]' Context={<Image src={couple} alt='' className='h-[35px] w-[35px] ml-[-9px] mt-[-14px]' />} customStyle='bg-[#FEF4E6] rounded mt-1 border border-1 border-[#FDE9CE] w-[50%]' icon={''} onClick={''} text='Savings plan to help you achieve your goals' type='solid' childDiv=' savingsDiv' title='Nikkah' />
              <CustomButton ButtonStyling='w-[94%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]' Context={<Image src={eid} alt='' className='h-[35px] w-[35px] ml-[-9px] mt-[-14px]' />} customStyle='bg-[#F5F1FE] rounded mt-1 border border-1 border-[#E6DAFC] ml-[8px] mt-1 w-[50%]' icon={''} onClick={''} text='Savings plan to help you achieve your goals' type='solid' childDiv=' savingsDiv' title='Eid' />
            </div>
          </ChildCard>
        </ChildCard>

        <ChildCard CardTitle='' cardStyle='w-[49%] h-[455px]'>
          <CustomCard>
            <div className='flex items-center justify-between px-2'>
              <h1 className='text-[#5C556C] font-[500] text-[16px]'>Transactions</h1>

              <Link href={'#'} className='text-[#8046F2] flex items-center font-[400]'>
                See all
              </Link>
            </div>

            <div className='w-full h-[420px] flex justify-center items-center'>
              <Image alt='' src={noTransaction} className='w-[200px]' />
            </div>
          </CustomCard>
        </ChildCard>
      </div>


      {/* modal contents */}
      {/* fund wallet modal*/}
      <CustomModal ModalStyling='' isOpen={fund} modalTitle='Fund wallet' onClose={FundClose}>
        <FundWallet TransferOpen={HandleTransferOpen} CardOpen={HandleFundWithCardOpen} />
      </CustomModal>
      <CustomModal ModalStyling='' isOpen={Transfer} modalTitle='Bank Transfer' onClose={TransferClose}>
        <BankTransfer />
      </CustomModal>
      <CustomModal ModalStyling='' isOpen={fundWithCard} modalTitle='Fund with Card' onClose={FundWithCardClose}>
        <FundWithCard />
      </CustomModal>

      {/* withdraw modal*/}
      <CustomModal ModalStyling='' isOpen={withdraw} modalTitle='Enter withdrawal amount' onClose={WithdrawClose}>
        <Withdrawal />
      </CustomModal>

      {/* airtime and data modal */}
      <CustomModal ModalStyling='' isOpen={airtime} modalTitle='Airtime & Data' onClose={AirtimeClose}>
        content
      </CustomModal>

      {/* cable TV modal */}
      <CustomModal ModalStyling='' isOpen={cable} modalTitle='Airtime & Data' onClose={CableClose}>
        content
      </CustomModal>

      {/* Internet modal */}
      <CustomModal ModalStyling='' isOpen={internet} modalTitle='Internet' onClose={InternetClose}>
        content
      </CustomModal>

      {/* Electricity modal */}
      <CustomModal ModalStyling='' isOpen={electricity} modalTitle='Electricity' onClose={ElectricityClose}>
        content
      </CustomModal>

      {/* PIN modal */}
      <CustomModal ModalStyling='' isOpen={pin} modalTitle='' onClose={PinClose}>
        <div className=''>
          <h1 className='text-[16px] font-[550] '>Enter PIN</h1>
          <p className='text-[13px] font-[430]'>Please enter your transaction PIN</p>
          <div className='w-full grid place-items-center mt-6'>
            <div>
              <DefaultPinInput
                length={4}
                otp
              />
              
            </div>
            <p className="text-center text-[13px] font-[500] my-12">

              Forgot your PIN?
              <Link href={''} className={`text-[#8046F2] ml-1`}>
                Reset PIN
              </Link>
            </p>
          </div>


          <DefaultButton
            type="solid"
            text='Continue'
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={''}
          />
        </div>
      </CustomModal>
    </DashboardContainer>
  );
};

export default Page;
