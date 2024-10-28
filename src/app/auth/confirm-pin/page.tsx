"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import { toast } from "react-toastify"; // Import toast for notifications
import axios from "axios"; // Import axios for API calls
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const CreatePin = () => {
  const [pin, setPin] = useState(""); // State to capture the PIN
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter(); // Initialize the router

  // Handle the PIN input change
  const handlePinChange = (value: any) => {
    setPin(value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (pin.length !== 4) {
      toast.error("PIN must be 4 digits long."); // Show error if PIN is not 4 digits
      return;
    }

    setIsLoading(true); // Set loading to true
    try {
      const response = await axios.post("https://sandbox.api.halalwealth.co/services/onboarding/set-pin", {
        transactionPin: pin,
      });

      toast.success(response.data.message); // Success toast
      console.log("PIN set successfully:", response.data);
      // Redirect or show a success message after PIN is set
      router.push("/some-next-page"); // Change this to the desired route after success
    } catch (error: any) {
      console.error("Error setting PIN:", error);
      toast.error(error.message); // Error toast
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Confirm your PIN"
      text="Create a PIN for your account to secure your transactions."
      terms=" "
      path="#"
      link=""
      underline=""
      btnText={"Continue"} // Button text changes based on loading state
      altText=""
      customStyle="hidden"
      display=""
      href=""
      onClick={handleSubmit} // Trigger the submit function when clicking Continue
      altOnClick={""}
      loading={isLoading} // Pass isLoading to AuthContainer
    >
      <DefaultPinInput
        length={4}
        onChange={handlePinChange} // Capture the PIN input
        value={pin} // Set the value of the PIN input
      />
    </AuthContainer>
  );
};

export default CreatePin;
