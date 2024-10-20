"use client"
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { DashboardIcon, DashboardIconActive, FinancingIcon, FinancingIconActive, InvestIcon, InvestIconActive, LogoutIcon, SavingsIcon, SavingsIconActive, SettingIcon, SettingIconActive } from '../../../../public/assets/icons'
import Image from 'next/image'
import Logo from '../../../../public/assets/images/Logo.png'
import { usePathname } from 'next/navigation'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const sidebar: { name: string, path: string, icon: ReactNode, ActiveIcon: ReactNode }[] = [
    { path: '/dashboard/home', name: 'Dashboard', icon: <DashboardIcon />, ActiveIcon: <DashboardIconActive /> },
    { path: '/dashboard/invest/balance', name: 'Invest', icon: <InvestIcon/>, ActiveIcon: <InvestIconActive /> },
    { path: '/dashboard/savings', name: 'Savings', icon: <SavingsIcon />, ActiveIcon: <SavingsIconActive /> },
    { path: '/dashboard/asset-financing', name: 'Asset financing', icon: <FinancingIcon/>, ActiveIcon: <FinancingIconActive /> },
    { path: '/dashboard/setting', name: 'Settings', icon: <SettingIcon />, ActiveIcon: <SettingIconActive/> },
  ]

  const handleLogout = () => {
    localStorage.removeItem("userInfo")
    router.push("/auth/signin")
    toast.success("Logged Out Successfully!")
  }

  return (
    <div className='fixed h-[100vh] w-[20%] top-0 left-0 bg-white shadow-lg p-2 z-[10]'>
      <div className='mt-[-5px]'>
        <Image src={Logo} alt='logo' />
      </div>
      {sidebar.map((link, i) => (
        <Link href={link.path} key={i} className={`flex mt-[10px] items-center p-3 rounded hover:bg-[#F5F1FE] ${pathname.includes(link.path) ? 'text-[#8046F2] bg-[#F5F1FE] font-[600] active' : ''}`}>
          {pathname.includes(link.path) ? link.ActiveIcon : link.icon}
          <h1 className='ml-[5px] font-[400] text-[17px]'>{link.name}</h1>
        </Link>
      ))}
      <Button className='text-[#FF4159] mt-[10px] p-3 rounded hover:bg-[#ff415a14] w-full' onClick={handleLogout}>
        <div className='flex items-center ml-[-60%]'>
        <LogoutIcon/>
        <h1 className='ml-[5px]'>Logout</h1>
        </div>
      </Button>
    </div>
  )
}


export default Sidebar
