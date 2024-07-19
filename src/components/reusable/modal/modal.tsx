import React from 'react';
import {
  Modal,
  ModalOverlay,
} from '@chakra-ui/react';
import { DefaultButton } from '../button/Button';
import Image from 'next/image';
import Home from '../../../../public/assets/images/home.png'

interface DefaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const DefaultModal = ({ isOpen, onClose, onOpen }: DefaultModalProps) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
      size={"md"}
    >
       <ModalOverlay className="bg-black bg-opacity-50" />
       <div className='w-[450px] h-[330px] bg-white rounded-lg shadow-lg absolute left-[30%] top-1/2 p-5 flex justify-between flex-col'>
            <div className='grid w-full items-center text-center'>
                <Image 
                alt='home'
                src={Home}
                className='w-[50px] m-auto mt-2'
                />
                <h1 className='font-[600] text-[19px] my-[20px]'>Skip BVN for later?</h1>
                <p>
                You won’t be able to perform transactions if you don’t 
                provide us with your BVN. Do you still wish to proceed?
                </p>
            </div>
        <div className="flex flex-col w-full">
            <DefaultButton
            type="solid"
            text="Skip"
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={onOpen}
         />

            <DefaultButton
            type="solid"
            text="Go Back"
            customStyle={`mt-[5px] text-[#8046F2] bg-[#F9FAFB] font-medium`}
            onClick={onClose}
         />
        </div>
       </div>
    </Modal>
  );
};

export {DefaultModal};
