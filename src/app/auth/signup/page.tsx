import React from 'react'
import AuthContainer from '@/components/auth/Container'
import DefaultImage from '../../../../public/assets/images/DefaultImage.png'
import { DefaultInput, IconInput } from '@/components/reusable/input/Input'
import { CountryIcon } from '../../../../public/assets/icons/index'

const SignUp = () => {
  return (
    <AuthContainer src={DefaultImage} title='Create a new account' text='Safe and Secure. We will never share your data.'>
        <DefaultInput size='lg' value='placeholder' CustomStyle='mb-4' label='Email address' />
        <IconInput value='000-000-0000' size='lg' type='tel' icon={<CountryIcon />} CustomStyle='' label='Phone number' />
    </AuthContainer>
  )
}

export default SignUp