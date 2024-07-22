import React from 'react'

const Navbar = ({PageTitle} : {PageTitle: string;}) => {
  return (
    <div className='ml-[20%] fixed top-0 w-[100%] p-4 bg-white h-[70px] shadow-sm z-10 flex items-center justify-between'>
      <h1 className=''>{PageTitle}</h1>

      <div>
        
      </div>
    </div>
  )
}

export default Navbar