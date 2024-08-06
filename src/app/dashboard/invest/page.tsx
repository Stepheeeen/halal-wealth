import React, { ReactNode } from 'react'
import DashboardContainer from '@/components/dashboard/dashboardContainer'

const InvestContainer = ({children}: {children:ReactNode}) => {
  return (
    <DashboardContainer PageTItle='Invest'>
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        {children}
      </div>
    </DashboardContainer>
  )
}

export default InvestContainer
