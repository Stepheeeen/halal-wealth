"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackIcon, NairaIcon } from '../../../../../public/assets/icons';
import { DefaultButton } from '@/components/reusable/button/Button';
import { DefaultInput, IconInput} from '@/components/reusable/input/Input';
import InvestContainer from '../../invest/page';

const Page = () => {
    const router = useRouter()

    const handleRoute = () => {
        router.push('/dashboard/savings/how-much')
    }

    return (
        <InvestContainer>
            <Link href={'/dashboard/invest/balance'} className='flex items-center mt-2 ml-2'>
                <BackIcon /> <span className='font-medium ml-1'>Back</span>
            </Link>

            <div className='w-[95%] flex items-center justify-between p-4'>
                <h1 className='text-[45px] w-[45%] text-wrap font-[480]'>
                How much do you want to start with?
                </h1>

                <div className='mt-[20px] ml-3 w-[45%]'>

                <IconInput
                        value={'Placeholder'}
                        onChange={() => { }}
                        size="lg"
                        type="text"
                        icon={<NairaIcon />}
                        RighIcon={""}
                        handleClick={() => { }}
                        CustomStyle="pl-[55px] bg-[#F9FAFB]"
                        label="Amount"
                    />

                    <p className='text-[14px] font-[500] text-[#5C556C] w-[95%] mt-3'></p>

                    <DefaultButton
                        type="solid"
                        text='Continue'
                        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-10"
                        onClick={handleRoute}
                    />
                </div>
            </div>
        </InvestContainer>
    );
}

export default Page;
