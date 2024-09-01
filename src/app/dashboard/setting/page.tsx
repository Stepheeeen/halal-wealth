import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/settings/modalContent'
import profile from '../../../../public/assets/images/profileImage.svg'
import DashboardContainer from '@/components/dashboard/dashboardContainer'
import { DefaultButton } from '@/components/reusable/button/Button'
import { GreenProfile } from '../../../../public/assets/icons'

const page = () => {
  return (
    <DashboardContainer PageTItle='Settings'>
      <div className='grid grid-cols-2 gap-3'>
        <Card Title='Profile'>
          <div className='grid place-items-center p-3 w-full text-[#14013A]'>
            <Image alt='' src={profile} className='w-[60px] mb-4' />
            <p className='font-[500] mb-[3px]'>Freeborn Ebosele</p>
            <p className='text-[#5C556C] font-[450]'>@freebornehirhere@gmail.com</p>
            <DefaultButton customStyle='bg-[#F5F1FE] border border-[#E6DAFC] w-[100px] text-[#8046F2] font-[550] text-[14px] mt-2' onClick={''} text='Edit Profile' type='solid' />
          </div>

          <div className='bg-[#ECF9F3] rounded px-2 py-4 flex items-center justify-between mt-3'>
            <GreenProfile/>

            <div className='w-[90%]'>
              <p className='text-[#14013A] text-[15px] font-[470]'>Complete account setup</p>
            </div>
          </div>
        </Card>
        <Card Title='Account'>
          <div className='p-3'>
            hii
          </div>
        </Card>
        <Card Title='Security'>
          <div className=' p-3'>
            hii
          </div>
        </Card>
        <Card Title='Legal'>
          <div className=' p-3'>
            hii
          </div>
        </Card>
      </div>
    </DashboardContainer>
  )
}

export default page
