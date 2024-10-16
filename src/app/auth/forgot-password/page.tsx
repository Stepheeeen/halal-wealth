"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput } from "@/components/reusable/input/Input";
import { toast } from "react-toastify";
import axios from "axios";

const Welcome = () => {
  const [email, setEmail] = useState(""); // State for managing the email input
  const [loading, setLoading] = useState(false); // Loading state for button

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Make API request to reset password
      const res = await axios.get(
        `/api/onboarding/forgot-password?email=${email}`
      );
      console.log(res);

      // Check if response status is 2000, otherwise handle error
      if (res.data.status === "2000") {
        toast.success(res.data.description); // Show success message
      } else {
        toast.error(res.data.description); // Show error message from response
      }
    } catch (error: any) {
      console.error(error.response);
      toast.error(
        error.response?.data?.description || "Failed to send reset email"
      ); // Show error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Enter email address"
      text="Enter your email to reset your password"
      terms=""
      path="#"
      link=""
      underline=""
      btnText={loading ? "Loading..." : "Continue"} // Show loading state on button
      altText=""
      customStyle="hidden"
      display=""
      href=""
      onClick={handleSubmit} // Pass handleSubmit to the button
      altOnClick={""}
    >
      <DefaultInput
        name="email"
        onChange={handleChange} // Update email state on input change
        size="lg"
        value={email}
        type="email"
        CustomStyle=""
        label="Email address"
      />
    </AuthContainer>
  );
};

export default Welcome;