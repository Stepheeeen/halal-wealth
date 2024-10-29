import React, { useState } from "react";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import { CustomModal } from "@/components/reusable/modal/modal";
import { DefaultButton } from "@/components/reusable/button/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import Modal from "./ResetPin";
import axios from "axios";
import { userInfo } from "@/app/constants";

const TransactionPinModal = ({ isOpen, onClose, onSubmit }) => {
  const [pin, setPin] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = async () => {
    try {
      const response = await axios.get(
        `/api/onboarding/forgot-pin?email=${userInfo.emailAddress}`,
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.status === "2000") {
        toast.success(
          `Reset PIN otp has been sent to ${userInfo.emailAddress} successfully!`
        );
        localStorage.setItem("resetPinId", response.data.data.requestId);
        setIsModalOpen(true);
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const closeModal = () => setIsModalOpen(false);

  const handlePinChange = (value) => {
    setPin(value);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (pin.length !== 4) {
      toast.error("Please enter a 4-digit PIN");
      return;
    }
    onSubmit(pin);
    setLoading(false);
  };

  return (
    <>
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
              <p
                onClick={openModal}
                className={`text-[#8046F2] ml-1 cursor-pointer`}
              >
                Reset PIN
              </p>
            </p>
          </div>

          <DefaultButton
            type="solid"
            text="Continue"
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={handleSubmit}
            isLoading={loading}
          />
        </div>
      </CustomModal>

      <Modal closeModal={closeModal} isOpen={isModalOpen} />
    </>
  );
};

export default TransactionPinModal;
