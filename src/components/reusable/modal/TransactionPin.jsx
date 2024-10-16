import React, { useState } from "react";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import { CustomModal } from "@/components/reusable/modal/modal";
import { DefaultButton } from "@/components/reusable/button/Button";
import Link from "next/link";
import { toast } from "react-toastify";

const TransactionPinModal = ({ isOpen, onClose, onSubmit }) => {
  const [pin, setPin] = useState("");

  const handlePinChange = (value) => {
    setPin(value);
  };

  const handleSubmit = () => {
    if (pin.length !== 4) {
      toast.error("Please enter a 4-digit PIN");
      return;
    }
    onSubmit(pin);
  };

  return (
    <CustomModal
      ModalStyling=""
      isOpen={isOpen}
      modalTitle=""
      onClose={onClose}
    >
      <div className="">
        <h1 className="text-[16px] font-[550] ">Enter PIN</h1>
        <p className="text-[13px] font-[430]">
          Please enter your transaction PIN
        </p>
        <div className="w-full grid place-items-center mt-6">
          <div>
            <DefaultPinInput
              length={4}
              otp
              value={pin}
              onChange={handlePinChange}
            />
          </div>
          <p className="text-center text-[13px] font-[500] my-12">
            Forgot your PIN?
            <Link href={""} className={`text-[#8046F2] ml-1`}>
              Reset PIN
            </Link>
          </p>
        </div>

        <DefaultButton
          type="solid"
          text="Continue"
          customStyle="bg-[#8046F2] text-white font-medium"
          onClick={handleSubmit}
        />
      </div>
    </CustomModal>
  );
};

export default TransactionPinModal;
