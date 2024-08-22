"use client"
import React, { useRef, useState, useEffect } from 'react'
import { CustomButton, DefaultButton } from '@/components/reusable/button/Button'
import Link from "next/link";
import ClipboardJS from 'clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BankIcon, BankIconLg, CardIcon, CopyIcon, NairaIcon, NumberIcon, PurpleFundWalletIcon, WalletIcon } from '../../../../public/assets/icons'
import { DefaultInput,  IconInput, } from '@/components/reusable/input/Input';
import { CustomModal, } from '@/components/reusable/modal/modal';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'
import Select from '../../reusable/input/MuiSelect';

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

export const Withdrawal = ({ onChange, SelectBankOpen, SelectBankClose, selectBank, HandleInputPinOpen, amount }: { onChange: any; selectBank: boolean, SelectBankClose: any; SelectBankOpen: any; HandleInputPinOpen: any; amount: any; }) => {

  return (
    <div className='mt-[20px]'>
      <IconInput
        value={amount}
        onChange={onChange}
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
        <WalletIcon />
        <p className=' text-[15px] font-[450] text-[#5C556C] ml-1'>Wallet balance</p>
        <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span>
        <h1 className='text-[#17B26A] font-[570]'>NGN 100,000</h1>
      </div>

      <DefaultButton
        type="solid"
        text='Continue'
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
        onClick={SelectBankOpen}
      />

      <CustomModal ModalStyling='' isOpen={selectBank} modalTitle='Select destination bank account' onClose={SelectBankClose}>
        <div className=''>
          <div className='w-full'>
            <CustomButton ButtonStyling='w-[96%] flex items-center justify-between text-start' Context={<div className='ml-[-7px] mr-[3px]'><BankIcon /></div>} childDiv='ml-3 savingsDiv custom text-[#5C556C]' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded' icon={''} onClick={''} text='Ebosele Freeborn - 0211150982' title='Guaranty trust bank' type='' />
            <CustomButton ButtonStyling='w-[96%] flex items-center justify-between text-start' Context={<div className='ml-[-7px] mr-[3px]'><BankIcon /></div>} childDiv='ml-3 savingsDiv custom text-[#5C556C]' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-3' icon={''} onClick={''} text='Ebosele Freeborn - 0211150982' title='Guaranty trust bank' type='' />
          </div>

          <Button variant='solid' className={`px-3 py-2 rounded font-[470] text-[15.5px] text-[#8046F2] my-2 mb-5`}>
            Add new card <span><PurpleFundWalletIcon /></span>
          </Button>

          <DefaultButton
            type="solid"
            text='Continue'
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={HandleInputPinOpen}
          />
        </div>
      </CustomModal>
    </div>
  )
}

export const AirtimeAndData = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabsChange = (index: any) => {
    setSelectedIndex(index);
  };
  const selectBillers = [
    {
      value: "USD",
      label: "IKEDC",
    },
    {
      value: "EUR",
      label: "Gotv",
    },
    {
      value: "BTC",
      label: "Startimes",
    },
    {
      value: "JPY",
      label: "Strong",
    },
  ];

  return (
    <div className='w-full h-[100vh]'>
      <Tabs className='w-full' onChange={handleTabsChange}>
        <TabList className='text-[14px] font-[450] text-[#5C5F84] pt-[20px] border-b-2 border-[#1018280D]'>
          <Tab className={`w-1/2 pb-[10px] border-b-2 ${selectedIndex === 0 ? 'text-[#8046F2] border-[#8046F2]' : 'border-white hover:text-black'}`}
          >AIRTIME</Tab>
          <Tab className={`w-1/2 pb-[10px] border-b-2 ${selectedIndex === 1 ? 'text-[#8046F2] border-[#8046F2]' : 'border-white hover:text-black'
            }`}
          >DATA BUNDLES</Tab>
        </TabList>

        <TabPanels className='w-full p-3'>
          <TabPanel className='font-[400] text-[15px]'>
            <Select selectText='Select Network' MuiBg='#F9FAFB' selectProviders={selectBillers} MuiCss='' />
            <IconInput
              value={''}
              onChange={''}
              size="lg"
              type="text"
              icon={<div className='mt-[-10px]'><NumberIcon /></div>}
              RighIcon={""}
              handleClick={""}
              CustomStyle="pl-[55px] bg-[#F9FAFB] font-[400] mb-3"
              label="Phone number"
            />
            <IconInput
              value={''}
              onChange={''}
              size="lg"
              type="text"
              icon={<NairaIcon />}
              RighIcon={""}
              handleClick={""}
              CustomStyle="pl-[55px] bg-[#F9FAFB]"
              label="Amount"
            />
            <DefaultButton
              type="solid"
              text='Continue'
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[47%]"
              onClick={''}
            />

          </TabPanel>
          <TabPanel className='font-[400] text-[15px]'>

            <Select selectText='Select Network' MuiBg='#F9FAFB' selectProviders={selectBillers} MuiCss='' />
            <Select selectText='Select Network' MuiBg='#F9FAFB' selectProviders={selectBillers} MuiCss='mt-5' />
            <IconInput
              value={''}
              onChange={''}
              size="lg"
              type="text"
              icon={<div className='mt-[-10px]'><NumberIcon /></div>}
              RighIcon={""}
              handleClick={""}
              CustomStyle="pl-[55px] bg-[#F9FAFB] font-[400] mb-3"
              label="Phone number"
            />
            <IconInput
              value={''}
              onChange={''}
              size="lg"
              type="text"
              icon={<NairaIcon />}
              RighIcon={""}
              handleClick={""}
              CustomStyle="pl-[55px] bg-[#F9FAFB]"
              label="Amount"
            />

            <DefaultButton
              type="solid"
              text='Continue'
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[25%]"
              onClick={''}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export const Internet = () => {
  const selectBillers = [
    {
      value: "USD",
      label: "IKEDC",
    },
    {
      value: "EUR",
      label: "Gotv",
    },
    {
      value: "BTC",
      label: "Startimes",
    },
    {
      value: "JPY",
      label: "Strong",
    },
  ];
  return (
    <div className='w-full h-[100vh] mt-[-10px]'>
      <Select MuiBg='#F9FAFB' selectText='Select Biller' selectProviders={selectBillers} MuiCss='mb-4' />
      <Select MuiBg='#F9FAFB' selectText='Select Plan' selectProviders={selectBillers} MuiCss='my-3' />
      <DefaultInput CustomStyle='mb-3' label='Smile account number' size='' type='solid' value='Placeholder' />
      <IconInput
        value={''}
        onChange={''}
        size="lg"
        type="text"
        icon={<NairaIcon />}
        RighIcon={""}
        handleClick={""}
        CustomStyle="pl-[55px] bg-[#F9FAFB]"
        label="Amount"
      />

      <DefaultButton
        type="solid"
        text='Continue'
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[46%]"
        onClick={''}
      />
    </div>
  )
}

export const CableTV = () => {
  const selectBillers = [
    {
      value: "USD",
      label: "IKEDC",
    },
    {
      value: "EUR",
      label: "Gotv",
    },
    {
      value: "BTC",
      label: "Startimes",
    },
    {
      value: "JPY",
      label: "Strong",
    },
  ];
  return (
    <div className='w-full h-[100vh] mt-[-10px]'>
      <Select MuiBg='#F9FAFB' selectText='Select Biller' selectProviders={selectBillers} MuiCss='mb-4' />
      <Select MuiBg='#F9FAFB' selectText='Select Plan' selectProviders={selectBillers} MuiCss='my-3' />
      <DefaultInput CustomStyle='mb-3' label='Decoder number' size='' type='solid' value='Placeholder' />
      <IconInput
        value={''}
        onChange={''}
        size="lg"
        type="text"
        icon={<NairaIcon />}
        RighIcon={""}
        handleClick={""}
        CustomStyle="pl-[55px] bg-[#F9FAFB]"
        label="Amount"
      />

      <DefaultButton
        type="solid"
        text='Continue'
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[46%]"
        onClick={''}
      />
    </div>
  )
}

export const Electricity = () => {
  const selectBillers = [
    {
      value: "USD",
      label: "IKEDC",
    },
    {
      value: "EUR",
      label: "Gotv",
    },
    {
      value: "BTC",
      label: "Startimes",
    },
    {
      value: "JPY",
      label: "Strong",
    },
  ];
  return (
    <div className='w-full h-[100vh] mt-[-10px]'>
      <Select MuiBg='#F9FAFB' selectText='Select Biller' selectProviders={selectBillers} MuiCss='mb-4' />
      <Select MuiBg='#F9FAFB' selectText='Select Plan' selectProviders={selectBillers} MuiCss='my-3' />
      <DefaultInput CustomStyle='mb-3' label='Meter number' size='' type='solid' value='Placeholder' />
      <IconInput
        value={''}
        onChange={''}
        size="lg"
        type="text"
        icon={<NairaIcon />}
        RighIcon={""}
        handleClick={""}
        CustomStyle="pl-[55px] bg-[#F9FAFB]"
        label="Amount"
      />

      <DefaultButton
        type="solid"
        text='Continue'
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[46%]"
        onClick={''}
      />
    </div>
  )
}