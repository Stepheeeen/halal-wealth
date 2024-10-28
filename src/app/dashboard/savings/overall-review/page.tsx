"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { BackIcon, WalletIcon } from '../../../../../public/assets/icons';
import { CustomButton, DefaultButton } from '@/components/reusable/button/Button';
import { CustomModal } from '@/components/reusable/modal/modal';
import { DefaultPinInput } from '@/components/reusable/input/Input';
import DashboardContainer from '@/components/dashboard/dashboardContainer';
 

const Page = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const List = [
        { text: 'Plan type', value: 'Hajj & Umrah' },
        { text: `Target amount`, value: '+N100' },
        { text: `Frequency`, value: 'Just this once ' },
        { text: `Investment matures on`, value: 'March 10, 2023' },
    ]

    return (
            <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">

            <Link href={'/dashboard/invest/balance'} className='flex items-center mt-2 ml-2'>
                <BackIcon /> <span className='font-medium ml-1'>Back</span>
            </Link>

            <div className='w-[95%] flex items-start justify-between p-4'>
                <h1 className='text-[54px] w-[45%] text-wrap font-[480]'>
                    Review Savings
                    plan details
                </h1>

                <div className='mt-[20px] ml-3 w-[48%] bg-[#F9FAFB] p-3 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-[#5C556C] text-[16px] font-[550]'>Summary</p>

                        </div>

                    </div>

                    <div className='bg-white rounded p-2 my-2'>
                        <ul>
                            {List.map((index, key) => (
                                <li key={key} className='w-full flex items-center justify-between py-6'>
                                    <p className='text-[15px] text-[#5C556C]'>{index.text}</p>
                                    <h1 className='font-[450]'>{index.value}</h1>
                                </li>
                            ))}
                            <li className='w-full flex items-center justify-between py-6'>
                                <div className='flex items-center justify-center text-[16px]'>
                                    <WalletIcon />
                                    <p className='text-[15px] font-[450] text-[#5C556C] ml-1'>Wallet balance</p>
                                    <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span>
                                    <h1 className='text-[#17B26A] font-[570]'>NGN 100,000</h1>
                                </div>

                                <Link href={''} className='font-[450] text-[#8046F2]'>
                                    Change
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className='bg-[#ECF9F3] p-1 mt-3'>
                        <CustomButton ButtonStyling='' Context={''} childDiv='' customStyle='font-[500] py-5 border border-[#8BD8B4] bg-[#ECF9F3] rounded-sm '
                            icon={''} onClick={() => { }}
                            text={<ul className='w-[90%] m-auto text-wrap text-start list-disc'>
                                <li className='text-[14px] font-[450]'>You can withdraw from your custom savings plan</li>
                                <li className='text-[14px] font-[450]'>Withdrawal requests will take 3 working days to be processed</li>
                            </ul>}
                            title='' type='' />
                    </div>

                    <DefaultButton
                        type="solid"
                        text='Continue'
                        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-5"
                        onClick={handleOpen}
                    />
                </div>
            </div>

            <CustomModal ModalStyling='' isOpen={open} modalTitle='' onClose={handleClose}>
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
        </div>
</DashboardContainer>

    );
}

export default Page;