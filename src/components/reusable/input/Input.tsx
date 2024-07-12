import React from 'react'
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputLeftElement,
    InputRightElement
} from '@chakra-ui/react'

const DefaultInput = ({ value, size, CustomStyle, label }: { value: string; size: string; CustomStyle: string; label: string; }) => {
    return (
        <>
        <p className='mb-[8px] font-medium text-[15px]'>{label}</p>
        <Input
            placeholder={value}
            size={size}
            variant='filled'
            className={`px-4 py-2 w-full rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
        />
</>
    )
}
const IconInput = ({ icon, type, value, size, CustomStyle, label }: { icon: any; type: string; value: string; size: string; CustomStyle: string; label: string; }) => {
    return (
        <>
        <p className='mb-3 font-medium text-[15px]'>{label}</p>
        <InputGroup>
            <InputLeftElement pointerEvents="none" className="h-full flex items-center pl-3">
                <span className="text-gray-500">{icon}</span>
            </InputLeftElement>
            <Input
                placeholder={value}
                size={size}
                variant='filled'
                type={type}
                className={`pl-[40px] px-4 py-2 w-full rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
            />
        </InputGroup>
        </>
    )
}

export { DefaultInput, IconInput }
