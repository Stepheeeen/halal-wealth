"use client"
import React, { useRef, useState, useEffect } from 'react'
import { CustomButton, DefaultButton } from '@/components/reusable/button/Button'
import ClipboardJS from 'clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BankIcon, BankIconLg, CardIcon, CopyIcon, NairaIcon, PurpleFundWalletIcon, WalletIcon } from '../../../../public/assets/icons'
import { Button } from '@chakra-ui/react';
import { IconInput } from '@/components/reusable/input/Input';

export const FundWallet = ({ TransferOpen, CardOpen }: { TransferOpen: any; CardOpen: any; }) => {

  return (
    <div className=''>
      <p className='font-[450] ml-[2px] mt-1'>
        Select how you want to fund your wallet
      </p>
      <div className='w-full'>
        <CustomButton ButtonStyling='' Context={<div className='ml-[-55%]'><BankIcon /></div>} childDiv='ml-3' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5' icon={''} onClick={TransferOpen} text='Bank Transfer' title='' type='' />
        <CustomButton ButtonStyling='' Context={<div className='ml-[-75%]'><CardIcon /></div>} childDiv='ml-3' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]' icon={''} onClick={CardOpen} text='Card' title='' type='' />
      </div>
    </div>
  )
}

export const BankTransfer = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current);

      clipboard.on('success', () => {
        toast.success('Copied to clipboard!');
      });

      clipboard.on('error', () => {
        toast.error('Failed to copy.');
      });

      return () => {
        clipboard.destroy();
      };
    }
  }, []);

  return (
    <div className='w-full grid place-items-center h-[50%]'>
      <div className='w-full grid place-items-center mt-5'>
        <BankIconLg />
        <h1 className='font-[600] my-3'>Via bank transfer</h1>
        <p className='text-[14px] font-[450] text-[#5C556C] text-center w-[95%]'>Money transfers sent to this bank account number will automatically fund your Halal wealth.</p>
      </div>

      <div>
        <div className='flex items-center justify-center mt-6'>
          <h1 id='accountNumber' className='mr-2 text-[#8046F2] text-[27px] font-[500]'>7238290200</h1>
          <button
            ref={buttonRef}
            data-clipboard-text="7238290200"
            className='p-2 ml-[-10px]'
            aria-label="Copy Account Number"
          >
            <CopyIcon />
          </button>
        </div>
        <p className='font-[550] text-[14px] mt-[3px]'>
          <span className='text-[#8046F2]'>Halal Wealth</span>
          /EBOSELE FREEBORN EHIRHERE
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export const FundWithCard = () => {
  return (
    <div className=''>
      <p className='font-[450] ml-[2px] mt-1'>
        Select a card to fund your wallet with
      </p>
      <div className='w-full'>
        <CustomButton ButtonStyling='w-[96%] flex items-center justify-between text-start' Context={<div className='ml-[-7px] mr-[3px]'><CardIcon /></div>} childDiv='ml-3 savingsDiv custom' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5' icon={''} onClick={''} text='02/26' title='....3100 Guaranty trust bank' type='' />
        <CustomButton ButtonStyling='w-[96%] flex items-center justify-between text-start' Context={<div className='ml-[-7px] mr-[3px]'><CardIcon /></div>} childDiv='ml-3 savingsDiv custom' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]' icon={''} onClick={''} text='02/26' title='....3100 Guaranty trust bank' type='' />
      </div>

      <Button variant='solid' className={`px-3 py-2 rounded font-[470] text-[15.5px] text-[#8046F2] my-2 mb-5`}>
        Add new card <span><PurpleFundWalletIcon /></span>
      </Button>

      <DefaultButton
        type="solid"
        text='Continue'
        customStyle="bg-[#8046F2] text-white font-medium"
        onClick={''}
      />
    </div>
  )
}

export const Withdrawal = () => {
  return (
    <div className='mt-[20px]'>
      <IconInput
        value="placeholder"
        size="lg"
        type="text"
        icon={<NairaIcon />}
        RighIcon={""}
        handleClick={""}
        CustomStyle="pl-[55px] bg-[#F9FAFB]"
        label="Amount"
      />

      <p className='text-[14px] font-[450] text-[#5C556C] text-center w-[95%] mt-2'>+NGN 50 processing fee</p>

      <div className=' flex items-center justify-center w-[95%] text-[16px] mt-6'>
        <WalletIcon/>
      <p className=' text-[15px] font-[450] text-[#5C556C] ml-1'>Wallet balance</p>
      <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span>
      <h1 className='text-[#17B26A] font-[570]'>NGN 100,000</h1>
      </div>

      <DefaultButton
        type="solid"
        text='Continue'
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
        onClick={''}
      />
    </div>
  )
}