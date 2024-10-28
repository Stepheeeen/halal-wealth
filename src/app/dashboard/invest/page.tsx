import React, { ReactNode } from 'react'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { userInfo } from '@/app/constants';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const InvestContainer = ({children}: {children: ReactNode;}) => {
  const router = useRouter()
  if(userInfo.token !== userInfo.token) {
    toast.error("user not logged in")
    router.push("/auth/signin")
  }
  return (
    <DashboardContainer PageTItle='Invest'>
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        {children}
      </div>
    </DashboardContainer>
  )
}

export default InvestContainer
