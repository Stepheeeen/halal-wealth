import React, { useState } from "react";
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DefaultPinInput } from "../input/Input";
import axios from "axios";
import { userInfo } from "@/app/constants";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [activeStep, setActiveStep] = useState(0); // Tracks the active tab/step
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const [cPin, setCPin] = useState("");

  const tabs = ["Step 1", "Step 2", "Step 3"]; // Define tab steps

  // Update OTP input value
  const handleChange = (value: any) => {
    setOtp(value);
  };

  const handlePinChange = (value: any) => {
    setPin(value);
  };

  const handleCPinChange = (value: any) => {
    setCPin(value);
  };

  // Function to handle Reset PIN API call
  const handleResetPin = async () => {
    if (pin !== cPin) {
      alert("Pins do not match");
      return;
    }

    try {
      const response = await axios.post(
        "/api/onboarding/reset-pin",
        {
          emailAddress: userInfo.emailAddress,
          otp,
          pin,
          requestId: localStorage.getItem("resetPinId"),
        },
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      );
      if (response.data.status === "2000") {
        toast.success(response.data.description);
        localStorage.removeItem("resetPinId")
        closeModal();
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      console.error("Error resetting PIN:", error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Modal Background */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-auto h-auto bg-white rounded-lg p-6 shadow-xl">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-7">
            <h1 className="text-[18px] font-medium text-black px-1">
              Reset PIN
            </h1>
            <button onClick={closeModal}>
              <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {/* Content Based on Active Tab */}
          <div className="space-y-4">
            {activeStep === 0 && (
              <div className="mb-4">
                <h1 className="text-[20px] font-semibold mb-5 text-black px-1">
                  Enter OTP
                </h1>
                <DefaultPinInput length={6} otp onChange={handleChange} />
              </div>
            )}
            {activeStep === 1 && (
              <div className="mb-4 w-[400px]">
                <h1 className="text-[20px] font-semibold mb-5 text-black px-1">
                  Enter PIN
                </h1>

                <div className="mx-auto">
                  <DefaultPinInput length={4} otp onChange={handlePinChange} />
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="mb-4 w-[400px]">
                <h1 className="text-[20px] font-semibold mb-5 text-black px-1">
                  Confirm PIN
                </h1>
                <div className="mx-auto">
                  <DefaultPinInput length={4} otp onChange={handleCPinChange} />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-[15%]">
            <button
              onClick={() => setActiveStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:bg-gray-200"
            >
              Previous
            </button>
            {activeStep === tabs.length - 1 ? (
              <button
                onClick={handleResetPin}
                className="px-4 py-2 bg-[#8046F2] text-white rounded-md"
              >
                Reset PIN
              </button>
            ) : (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="px-4 py-2 bg-[#8046F2] text-white rounded-md"
              >
                Next
              </button>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
