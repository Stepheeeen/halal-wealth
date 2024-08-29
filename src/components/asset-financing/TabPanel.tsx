import React from 'react'
import Image from 'next/image'
import { CustomButton, DefaultButton } from '../reusable/button/Button'

const MyAssets = () => {
    const myAsset = [
        {AssetName: 'Name of asset', Amount: '500,000', ProductImage: 'image', AmountPaid: '5000'},
    ]
  return (
    <div className='grid grid-cols-3 place-content-between'>
        {myAsset.map((card, i) => (
            <div key={i} className='p-2 shadow'>
                <div className='flex justify-between items-center'>
                    <Image alt='' src={card.ProductImage} className='w-[100px]'/>

                    <div>
                        <p>{card.AssetName}</p>

                        <h1>
                            Amount payable

                            <span></span>

                            <span>NGN {card.Amount}</span>
                        </h1>
                    </div>
                </div>
                    <hr />
                <div className='flex justify-between items-center'>
                    <div>
                        <p>Amount paid</p>
                        <h1>NGN {card.AmountPaid}</h1>
                    </div>

                    <DefaultButton customStyle='bg-[#8046F2] text-white' onClick={''} text='Pay' type='solid'/>
                </div>

            </div>
        ))}
    </div>
  )
}

export {MyAssets}