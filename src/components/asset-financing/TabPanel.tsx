import React from 'react'
import Image from 'next/image'
import PesLight from '../../../public/assets/images/PES-light.png'
import { DefaultButton } from '../reusable/button/Button'

const MyAssets = () => {
    const myAsset = [
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 70000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 90000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 5000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 25000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 205000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 5000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 87700, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 450000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 250000, value: 73, },
        { AssetName: 'Name of asset', Amount: 500000, ProductImage: PesLight, AmountPaid: 350000, value: 73, },
    ]

    const formatNumber = (number: number) => {
        return number.toLocaleString();
      };

    return (
        <div className='grid grid-cols-3 gap-3 bg-[#F9FAFB] py-3'>
            {myAsset.map((card, i) => {
                const percentage = Math.floor((card.AmountPaid / card.Amount) * 100);
                return (
                    <div key={i} className='p-3 shadow bg-[#FFFFFF] flex flex-col justify-center rounded' >
                        <div className='flex justify-between items-center py-2'>
                            <Image src={card.ProductImage} alt='' className='w-[44px] h-[44px]' width={0} height={0} />

                            <div className='w-[85%] mx-1'>
                                <p className='text-[#5C556C] font-[400] text-[12px]'>{card.AssetName}</p>

                                <h1 className='text-[#5C556C] font-[450] text-[13px] flex items-center'>
                                    Amount

                                    <span className='w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1'></span>

                                    <p className='text-[#17B26A] font-[600]'>NGN {formatNumber(card.Amount)}</p>
                                </h1>
                            </div>

                            <p className='font-[500] text-[#14013A] text-[18px]'>
                                {percentage}%
                            </p>
                        </div>
                        <div className="relative h-1 w-full rounded-full bg-[#E6DAFC]">
                            <div
                                className="absolute h-full bg-[#8046F2] rounded-full"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <div className='flex justify-between items-center py-2 w-full'>
                            <div className='W-[70%]'>
                                <p className='text-[#030517] font-[450] text-[14px]'>Amount paid</p>
                                <h1 className='text-[#14013A] font-[550] text-[16px]'>NGN {formatNumber(card.AmountPaid)}</h1>
                            </div>

                            <div className='w-[30%]'>
                            <DefaultButton customStyle='bg-[#8046F2] text-white w-auto h-[37px] rounded-[3px] font-[450]' onClick={''} text='Pay' type='solid' />
                            </div>
                        </div>

                    </div>
                )
            })}
        </div >
    )
}

export { MyAssets }