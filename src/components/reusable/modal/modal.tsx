import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { DefaultButton } from '../button/Button';

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
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>

        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Add content here */}
        </ModalBody>
        <ModalFooter>
            <DefaultButton
            type="solid"
            text="Skip"
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={""}
         />

            <DefaultButton
            type="solid"
            text="Go Back"
            customStyle={`mt-[5px] text-[#8046F2] bg-[#F9FAFB] font-medium`}
            onClick={onClose}
         />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export {DefaultModal};
