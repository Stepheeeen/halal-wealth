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

const InputLabel = ({label}: {label: string;}) => {
    return(
    <p className='mb-[5px] font-medium text-[15px]'>{label}</p>
    )
}

const DefaultInput = ({ value, size, CustomStyle, label, type }: { value: string; size: string; CustomStyle: string; label: string; type: string; }) => {
    return (
        <>
        <InputLabel label={label} />
        <Input
            placeholder={value}
            type={type}
            size={size}
            variant='filled'
            className={`px-4 py-2 w-full rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
        />
</>
    )
}
const IconInput = ({ icon, type, value, size, CustomStyle, label, RighIcon, handleClick }: { icon: any; type: string; value: string; size: string; CustomStyle: string; label: string; RighIcon: any; handleClick: any; }) => {
    return (
        <>
        <InputLabel label={label} />
        <InputGroup>
            <InputLeftElement pointerEvents="none" className="h-full flex items-center pl-3">
                <span className="">{icon}</span>
            </InputLeftElement>
            <Input
                placeholder={value}
                size={size}
                variant='filled'
                type={type}
                className={` px-4 py-2 w-full rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
            />
            <InputRightElement className="h-full flex items-center cursor-pointer pr-3 pb-3" onClick={handleClick}>
                <span className="">{RighIcon}</span>
            </InputRightElement>
        </InputGroup>
        </>
    )
}

export { DefaultInput, IconInput, InputLabel }
