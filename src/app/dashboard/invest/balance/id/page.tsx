"use client"
import React from 'react';
import { DefaultCard } from '@/components/reusable/card/Card';
import Chart from '../../../../../../public/assets/images/chart.png'
import { NextIconPurple, } from '../../../../../../public/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import InvestContainer from '../../page';

const Page = () => {
    return (
        <InvestContainer>
            <div>
            <DefaultCard cardStyle='h-[150px] mt-[11px] p-2 w-[325px] border border-2 rounded-md'>
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

            </InvestContainer>
    )
}

export default Page
