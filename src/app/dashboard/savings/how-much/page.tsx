"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackIcon, NairaIcon} from '../../../../../public/assets/icons';
import { DefaultButton } from '@/components/reusable/button/Button';
import { IconInput } from '@/components/reusable/input/Input';
import InvestContainer from '../../invest/page';

const Page = () => {
    const router = useRouter()

    const handleRoute = () => {
        router.push('/dashboard/savings/plan-range')
    }

    return (
        <InvestContainer>
            <Link href={'/dashboard/invest/balance'} className='flex items-center mt-2 ml-2'>
                <BackIcon /> <span className='font-medium ml-1'>Back</span>
            </Link>

            <div className='w-[95%] flex items-center justify-between p-4'>
                <h1 className='text-[54px] w-[45%] text-wrap font-[480]'>
                    How much do you want to save?
                </h1>

                <div className='mt-[20px] ml-3 w-[45%]'>
                <h1 className='text-[18px] font-[600] text-[#14013A] w-[95%] mb-3'>Specifiy your saving goals</h1>
                    <IconInput
                        value={''}
                        onChange={() => { }}
                        size="lg"
                        type="text"
                        icon={<NairaIcon />}
                        RighIcon={""}
                        handleClick={() => { }}
                        CustomStyle="pl-[55px] bg-[#F9FAFB]"
                        label="Target Amount"
                    />

                    <DefaultButton
                        type="solid"
                        text='Continue'
                        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
                        onClick={handleRoute}
                    />
                </div>
            </div>
        </InvestContainer>
    );
}

export default Page;
