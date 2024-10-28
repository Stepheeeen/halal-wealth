"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreatePin = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePinChange = (value: any) => {
    setPin(value);
  };

  const handleSubmit = async () => {
    if (pin.length !== 4) {
      toast.error("PIN must be 4 digits long.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("https://sandbox.api.halalwealth.co/services/onboarding/set-pin", {
        transactionPin: pin,
      });

      toast.success(response.data.message);
      console.log("PIN set successfully:", response.data);
    } catch (error: any) {
      console.error("Error setting PIN:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthContainer
        src={DefaultImage}
        title="Create your PIN"
        text="Create a PIN for your account to secure your transactions."
        terms=" "
        path="#"
        link=""
        underline=""
        btnText={"Continue"}
        altText=""
        customStyle="hidden"
        display=""
        href="/auth/method"
        onClick={handleSubmit}
        altOnClick=""
        loading={isLoading}  // Pass isLoading to AuthContainer
      >
        <DefaultPinInput
          length={4}
          onChange={handlePinChange}
          value={pin}
        />
      </AuthContainer>
      <ToastContainer />
    </>
  );
};

export default CreatePin;
