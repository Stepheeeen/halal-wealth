import React,{ReactNode} from 'react'
import { Button, ButtonSpinner } from '@chakra-ui/react';

const DefaultCard = ({children, cardStyle}:{children:ReactNode; cardStyle: string;}) => {
  return (
    <div className={`rounded ${cardStyle}`}>
      {children}
    </div>
  )
}

const BalanceCard = ({customStyle, styleName, CardTitle, hideBalance, BalanceIcon, Balance, handleClick1, handleClick2, button1, button2, buttonIcon1, buttonIcon2, styling1, styling2}:{customStyle: any; styleName: string;CardTitle: string; hideBalance: any; BalanceIcon: any; Balance: string; handleClick1: any; handleClick2: any; button1: string; button2: string; buttonIcon1: any; buttonIcon2: any; styling1: string; styling2: string;}) => {
  return (
    <div className={`w-[425px] rounded-lg h-[190px] p-5 text-[#fff] ${customStyle} ${styleName}`}>
      <div className='flex items-center'>
        <p>{CardTitle}</p>
        <Button onClick={hideBalance} className='ml-[15px]'>
            {BalanceIcon}
        </Button>
      </div>
      <div>
        <h1 className='font-[600] text-[40px] mb-3'>{Balance}</h1>
      </div>
      <div>
        <Button variant='solid' className={`px-3 py-2 rounded font-[500] ${styling1}`} onClick={handleClick1}>
            {button1} <span> {buttonIcon1}</span>
        </Button>
        <Button variant='solid' className={`px-3 py-2 rounded ml-3 font-[500] ${styling2}`} onClick={handleClick2}>
            {button2} <span>{buttonIcon2}</span>
        </Button>
      </div>
    </div>
  )
}

const ChildCard = ({CardTitle, cardStyle, children}: {CardTitle: string; cardStyle: string; children: ReactNode;}) => {
  return(
    <DefaultCard cardStyle={`bg-white p-3 shadow-sm ${cardStyle}`}>
        <h1 className='text-[#5C556C] font-[500] mb-2 text-[16px]'>{CardTitle}</h1>
        <div>
          {children}
        </div>
    </DefaultCard>
  )
}

const CustomCard = ({children}: {children: ReactNode;}) => {
  return(
    <div>
      {children}
    </div>
  )
}

export {DefaultCard, BalanceCard, ChildCard, CustomCard}