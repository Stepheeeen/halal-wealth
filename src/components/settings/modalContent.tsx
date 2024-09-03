import React, { ReactNode } from 'react'

const ModalContent = () => {
  return (
    <div>modalContent</div>
  )
}

const Card = ({Title, children, height}: {Title: string, children: ReactNode, height: string}) => {
  return(
    <div>
    <h1 className='text-[17px] font-[550] mb-2 text-[#14013A]'>{Title}</h1>
    <div className={`bg-white shadow-sm rounded-sm mb-3 p-2 h-[${height}] h-[320px]`}>
      {children}
    </div>
    </div>
  )
}

export {ModalContent, Card}