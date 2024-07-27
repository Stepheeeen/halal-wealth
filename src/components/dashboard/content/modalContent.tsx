import React from 'react'
import { CustomButton } from '@/components/reusable/button/Button'
import { BankIcon, CardIcon } from '../../../../public/assets/icons'

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
  return (
    <div className=''>
      transfer
    </div>
  )
}