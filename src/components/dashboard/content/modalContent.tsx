"use client"
import React,{useRef, useState, useEffect} from 'react'
import { CustomButton } from '@/components/reusable/button/Button'
import ClipboardJS from 'clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BankIcon, BankIconLg, CardIcon, CopyIcon } from '../../../../public/assets/icons'

export const FundWallet = ({TransferOpen}:{TransferOpen: any;}) => {

  return (
    <div className=''>
      <p className='font-[450] ml-[2px] mt-1'>
        Select how you want to fund your wallet
      </p>
      <div className='w-full'>
          <CustomButton ButtonStyling='' Context={<div className='ml-[-55%]'><BankIcon/></div>} childDiv='ml-3' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5' icon={''} onClick={TransferOpen} text='Bank Transfer' title='' type=''/>
          <CustomButton ButtonStyling='' Context={<div className='ml-[-75%]'><CardIcon/></div>} childDiv='ml-3' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]' icon={''} onClick={''} text='Card' title='' type=''/>
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
      <div className='w-full grid place-items-center'>
        <BankIconLg />
        <h1>Via bank transfer</h1>
        <p>Money transfers sent to this bank account number will automatically fund your Halal wealth.</p>
      </div>

      <div>
        <div className='flex items-center'>
          <h1 id='accountNumber' className='mr-2'>7238290200</h1>
          <button
            ref={buttonRef}
            data-clipboard-text="7238290200"
            className='p-2'
            aria-label="Copy Account Number"
          >
            <CopyIcon />
          </button>
        </div>
        <p>
          <span>Halal Wealth</span>
          /EBOSELE FREEBORN EHIRHERE
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};