import React, { ReactNode } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
} from '@chakra-ui/react';
import { DefaultButton } from '../button/Button';
import Image from 'next/image';
import Home from '../../../../public/assets/images/home.png'
import { BackIcon, SuccessIcon } from '../../../../public/assets/icons';

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

interface CustomModalProps {
  isOpen: boolean;
  onClose: any;
  ModalStyling: string;
  children: ReactNode;
  modalTitle: any;
}

const CustomModal = ({ isOpen, onClose, ModalStyling, children, modalTitle }: CustomModalProps) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      size={""}
    >
      <ModalOverlay className="bg-black bg-opacity-50 z-20"/>
      <div className={`w-[30%] h-[100vh] bg-white shadow-lg fixed top-0 right-0 z-30 ${ModalStyling}`}>
        <header className='px-3 h-[70px] shadow-sm flex items-center'>
          <div className='flex items-center'>
            <Button variant={'ghost'} onClick={onClose}>
              <BackIcon />
            </Button>

            <h1 className='text-[17px] ml-3 font-[500] text-[#14013A]'>{modalTitle}</h1>
          </div>
        </header>
        <section className='p-3'>
        {children}
        </section>

      </div>
    </Modal>
  )
}

const SuccessModal = ({isOpen, onClose, amount}: {isOpen: boolean; onClose: any; amount: string; }) => {
  return(
    <CustomModal ModalStyling='' isOpen={isOpen} onClose={onClose} modalTitle='Close'>
      <div className='w-full h-[60vh] grid place-items-center'>
        <div className='w-full grid place-items-center'>
          <SuccessIcon/>
          <h1 className='font-[550] text-xl text-center my-2 mt-5'>NGN {amount} withdrawal successful</h1>
          <p className='text-center text-[14px] font-[450]'>Your withdrawal of {amount} was successful and is processing. Thank you</p>
        </div>
      </div>
    </CustomModal>
  )
}

export { DefaultModal, CustomModal, SuccessModal };
