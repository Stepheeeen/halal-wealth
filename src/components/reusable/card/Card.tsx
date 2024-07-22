import React,{ReactNode} from 'react'

const Card = ({children, cardStyle}:{children:ReactNode; cardStyle: string;}) => {
  return (
    <div className={`${cardStyle}`}>
      {children}
    </div>
  )
}

export default Card