"use client"
import React, { useState } from 'react';
import InvestContainer from '../../page';
import Link from 'next/link';
import { BackIcon, BankIcon, CardIcon, NairaIcon, WalletIcon, WalletIconPurple } from '../../../../../../public/assets/icons';
import { CustomButton, DefaultButton } from '@/components/reusable/button/Button';
import { CustomModal } from '@/components/reusable/modal/modal';
import { IconInput } from '@/components/reusable/input/Input';

const Page = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <InvestContainer>
            <Link href={'/dashboard/invest/balance'} className='flex items-center mt-2 ml-2'>
                <BackIcon /> <span className='font-medium ml-1'>Back</span>
            </Link>

            <div className='w-[95%] flex items-center justify-between p-4'>
                <h1 className='text-[54px] w-[45%] text-wrap font-[480]'>
                    How much would you like to invest?
                </h1>

                <div className='mt-[20px] ml-3 w-[45%]'>
                    <IconInput
                        value={''}
                        onChange={() => { }}
                        size="lg"
                        type="text"
                        icon={<NairaIcon />}
                        RighIcon={""}
                        handleClick={() => { }}
                        CustomStyle="pl-[55px] bg-[#F9FAFB]"
                        label="Amount"
                    />

                    <p className='text-[14px] font-[450] text-[#5C556C] text-center w-[95%] mt-2'>+NGN 50 processing fee</p>

                    <div className='flex items-center justify-center w-[95%] text-[16px] mt-6'>
                        <WalletIcon />
                        <p className='text-[15px] font-[450] text-[#5C556C] ml-1'>Wallet balance</p>
                        <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span>
                        <h1 className='text-[#17B26A] font-[570]'>NGN 100,000</h1>
                    </div>

                    <DefaultButton
                        type="solid"
                        text='Continue'
                        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
                        onClick={handleOpen}
                    />
                </div>
            </div>

            <CustomModal ModalStyling='' isOpen={open} modalTitle='' onClose={handleClose}>
                <div className=''>
                    <p className='font-[500] ml-[2px] mt-1'>
                        Choose  payment method
                    </p>
                    <div className='w-full'>
                        <CustomButton ButtonStyling='w-[69%] flex justify-end' Context={<div className='flex items-center'><WalletIconPurple /> <p className='ml-1'>Wallet</p></div>} childDiv='ml-3 flex items-center' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] flex items-center justify-between border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5 px-0' icon={''} onClick={() => { }} text={<div className='flex items-center'><p className='text-[15px] font-[450] ml-1'>Balance</p><span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span><h1 className='text-[#17B26A] font-[570]'>NGN 100,000</h1></div>} title='' type='' />
                        <CustomButton ButtonStyling='' Context={<div className='ml-[-75%]'><CardIcon /></div>} childDiv='ml-3' customStyle='font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]' icon={''} onClick={() => { }} text='Card' title='' type='' />
                    </div>

                    <DefaultButton
                        type="solid"
                        text='Continue'
                        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-[70px]"
                        onClick={''}
                    />
                </div>
            </CustomModal>
        </InvestContainer>
    );
}

export default Page;
