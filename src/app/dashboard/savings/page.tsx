"use client";
import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/dashboardContainer";
import { FundWalletIcon, HideIcon, HideIconWhite, NextIcon, NextIconPurple, ShowIcon, ShowIconWhite, TransactionStatus, WarningIcon, WithdrawIcon } from "../../../../public/assets/icons";
import { BalanceCard, ChildCard } from "@/components/reusable/card/Card";
import cash from "../../../../public/assets/images/cash.png";
import hajj from "../../../../public/assets/images/hajj.png";
import woman from "../../../../public/assets/images/woman.png";
import couple from "../../../../public/assets/images/couple.png";
import eid from "../../../../public/assets/images/eid.png";
import { CustomButton } from "@/components/reusable/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ChartLg from '../../../../public/assets/images/chart-Contain.png'
import { CustomModal } from "@/components/reusable/modal/modal";
import ProgressBar from "@/components/reusable/progressBar/progressBar";
import { userInfo } from "@/app/constants";

const Page = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();

  const [selectSavings, setSelectSavings] = useState(false);
  const SelectSavingsOpen = () => setSelectSavings(true);
  const SelectSavingsClose = () => setSelectSavings(false);

  const [balance, setBalance] = useState(false);
  const BalanceOpen = () => setBalance(true);
  const BalanceClose = () => setBalance(false);

  const handleBalanceOpen = () => {
    setBalance(true);
    setSelectSavings(false)
  }

  const investmentCard = [
    { title: "Custom savings", src: cash },
    { title: "Hajj & Umrah", src: hajj },
    { title: "Aqeeqah", src: woman },
  ];

  const investmentPlan = [
    {
      title: "Custom savings",
      text: "Create a custom savings plan to suit your needs",
      color: "bg-[#F5F1FE] border border-1 border-[#E6DAFC]",
      src: cash,
    },
    {
      title: "Hajj & Umrah",
      text: "Savings plan to help you achieve your goals",
      color: "bg-[#ECF9F3] border border-1 border-[#D1F0E1]",
      src: hajj,
    },
    {
      title: "Eid",
      text: "Savings plan to help you achieve your goals",
      color: "bg-[#F5F1FE] border border-1 border-[#E6DAFC]",
      src: eid,
    },
    {
      title: "Nikkah",
      text: "Savings plan to help you achieve your goals",
      color: "bg-[#FEF4E6] border border-1 border-[#FDE9CE]",
      src: couple,
    },
    {
      title: "Aqeeqah",
      text: "Savings plan to help you achieve your goals",
      color: "bg-[#F5F1FE] border border-1 border-[#E6DAFC]",
      src: woman,
    },
  ];

  const history = [
    {status: <TransactionStatus/> , amount: '100', date: '18 March 2022'},
    {status: <TransactionStatus/> , amount: '100', date: '18 March 2022'},
    {status: <TransactionStatus/> , amount: '100', date: '18 March 2022'},
  ]

  return (
    <DashboardContainer PageTItle="Save">
      <BalanceCard
        customStyle="text-black p-0 ml-[-10px]"
        styleName=""
        CardTitle="Investment Total"
        hideBalance={handleClick}
        BalanceIcon={show ? <HideIcon /> : <ShowIcon />}
        Balance={show ? `₦ ${userInfo.savingsBalance}` : "****"}
        handleClick1=""
        handleClick2=""
        button1=""
        button2=""
        buttonIcon1=""
        buttonIcon2=""
        styling1=""
        styling2=""
      />

      <ChildCard CardTitle="My Investments" cardStyle="mt-[-7%] remove-shadow">
        <div className="w-full defaultCard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {investmentCard.map((card, key) => (
            <CustomButton
              key={key}
              ButtonStyling="w-full flex items-center justify-between text-start text-[14px]"
              Context={<Image alt="" className="w-[45px]" src={card.src} />}
              customStyle="shadow-sm border-1 border rounded-[8px] mt-3 w-full buttonChild py-8"
              icon={<NextIconPurple />}
              onClick={SelectSavingsOpen}
              text={
                <div className="flex items-center mt-1">
                  Balance
                  <span className="w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1"></span>
                  <p className="text-[#17B26A] font-[570]">NGN 175,000</p>
                </div>
              }
              type="solid"
              childDiv=""
              title={card.title}
            />
          ))}
        </div>
      </ChildCard>

      <ChildCard CardTitle="Create a new investment" cardStyle="remove-shadow">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {investmentPlan.map((card, key) => (
            <div key={key} className="w-full">
              <CustomButton
                ButtonStyling="w-full flex items-center justify-between text-start ml-2 text-[14px]"
                Context={
                  <Image
                    alt=""
                    className="w-[55px] mb-1 ml-[-79%]"
                    src={card.src}
                  />
                }
                customStyle={`shadow-sm border-1 border rounded-[8px] mt-3 w-full items-start flex-col text-wrap buttonChild ${card.color}`}
                icon=""
                onClick={() => { }}
                text={card.text}
                type="solid"
                childDiv="text-wrap w-full"
                title={card.title}
              />
            </div>
          ))}
        </div>
      </ChildCard>

      <CustomModal ModalStyling='' isOpen={selectSavings} modalTitle='Custom savings' onClose={SelectSavingsClose}>
        <div className="w-full">
          {investmentCard.map((card, key) => (
            <CustomButton
              key={key}
              ButtonStyling="w-full flex items-center justify-between text-start ml-2 text-[14px]"
              Context={<Image alt="" className="w-[45px]" src={card.src} />}
              customStyle="shadow-sm border-1 border rounded-[8px] mt-3 w-full buttonChild"
              icon={<NextIcon />}
              onClick={handleBalanceOpen}
              text={
                <div className="flex items-center mt-1">
                  Balance
                  <span className="w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1"></span>
                  <p className="text-[#17B26A] font-[570]">NGN 175,000</p>
                </div>
              }
              type="solid"
              childDiv=""
              title={card.title}
            />
          ))}
        </div>
      </CustomModal>


      <CustomModal ModalStyling='overflow-scroll' isOpen={balance} modalTitle='[Plan name]' onClose={BalanceClose}>
        <div className="w-full overflow-scroll">
          <BalanceCard customStyle='bg-[#4E05DC] grid place-items-center' styleName='walletBg width' CardTitle='Wallet Balance' hideBalance={handleClick} BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />} Balance={show ? '₦ 100,000' : '****'} handleClick1={''} handleClick2={''} button1='Fund wallet' button2='Withdraw' buttonIcon1={<FundWalletIcon />} buttonIcon2={<WithdrawIcon />} styling1='bg-[#14013A] mt-[-5px]' styling2='bg-[#fff] text-[#8046F2] mt-[-5px]' />

          <ProgressBar progress={100000} target={500000} CustomStyle="mt-3" />

          <div className='bg-[#ECF9F3] p-1 mt-3'>
            <div className='border border-[#8BD8B4] bg-[#ECF9F3] rounded-sm flex px-1 py-2'>
              <div className="flex-shrink-0 p-2">
                <WarningIcon />
              </div>
              <div className="ml-2">
                <h3 className="text-sm font-semibold text-gray-800">WIthdrawal info</h3>
                <p className="text-sm text-gray-600">You can withdraw from this saving plan whenever you wish</p>
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
                ))  
              }
              </ul>
          </ChildCard>
        </div>
      </CustomModal>
    </DashboardContainer>
  );
};

export default Page;
