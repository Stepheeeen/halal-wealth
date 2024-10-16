"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreatePin = () => {
  const [pin, setPin] = useState(""); // State to capture the PIN
  const [loading, setLoading] = useState(false); // Optional loading state

  // Handle the PIN input change
  const handlePinChange = (value:any) => {
    setPin(value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (pin.length !== 4) {
      toast.error("PIN must be 4 digits long.");
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.post("/api/onboarding/set-pin", {
        transactionPin: pin,
      });

      toast.success(response.data.message);  // Success toast
      console.log("PIN set successfully:", response.data);
      // You can redirect or show a success message after PIN is set
    } catch (error:any) {
      console.error("Error setting PIN:", error);
      toast.error(error.message);  // Error toast
    } finally {
      setLoading(false);
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
        btnText={loading ? "Processing..." : "Continue"}
        altText=""
        customStyle="hidden"
        display=""
        href="/auth/method"
        onClick={handleSubmit}  // Trigger the submit function when clicking Continue
        altOnClick={""}
      >
        <DefaultPinInput
          length={4}
          onChange={handlePinChange}  // Capture the PIN input
          value={pin}
        />
      </AuthContainer>
    </>
  );
};

export default CreatePin;