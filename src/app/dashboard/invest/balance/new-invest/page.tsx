import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InvestContainer from '../../page'
import { DefaultCard } from '@/components/reusable/card/Card'
import { BackIcon, NextIconPurple } from '../../../../../../public/assets/icons'
import Chart from '../../../../../../public/assets/images/chart.png'
import ChartLg from '../../../../../../public/assets/images/chart-Lg.png'
import { CustomButton, DefaultButton } from '@/components/reusable/button/Button'

const Page = () => {
    return (
        <InvestContainer>
            <div>
                <div>
                    <Link href={']'} className='flex items-center'>
                        <BackIcon /> <span className='font-medium ml-1'>Back</span>
                    </Link>
                    <h1 className='font-[600] text-[30px] my-2'>
                        Sukuk bonds
                    </h1>
                    <div className='flex items-center justify-between w-full'>
                        <DefaultCard cardStyle='h-[150px] mt-[11px] p-2 w-[450px] rounded-md'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-[550] text-[21px] w-[50%] text-[#14013A] text-wrap'>
                                    Lotus Halal Fixed Income Fund
                                </h1>
                                <div className='w-[40px] h-[40px] rounded-sm bg-[#14013A]'>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                                <div>
                                    <h1 className='text-[#17B26A] text-[17px] font-[600] mt-1'>4.21 - 6.12%</h1>
                                    <p className='text-[#5C556C] text-[14px] font-[500]'>Estimated returns</p>
                                </div>

                                <Image alt='' src={Chart} className='w-[30%]' />
                            </div>
                        </DefaultCard>

                        <div className='w-[12%]'>
                        <DefaultButton customStyle='w-auto bg-[#8046F2] text-white font-medium px-8 py-2 mt-[-20px] mr-3' onClick={''} text='Invest' type='solid'/>
                        </div>
                    </div>
                </div>

                <Image alt='' src={ChartLg} className='mt-[20px]' />
            </div>
        </InvestContainer>
    )
}

export default Page
