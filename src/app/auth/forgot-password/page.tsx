"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput } from "@/components/reusable/input/Input";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      // API request to reset password
      const res = await axios.get(
        `/api/onboarding/forgot-password?email=${email}`
      );

      if (res.data.status === "2000") {
        toast.success(res.data.description);
        localStorage.setItem("resetRequestId", res.data.data.requestId);
        localStorage.setItem("resetEmail", email);
        router.push("/auth/forgot-password-otp");
      } else {
        toast.error(res.data.description);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.description || "Failed to send reset email";
      toast.error(errorMessage);
      console.error(error.response);
    } finally {
      setLoading(false);
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
      btnText={"Continue"} // Show loading state on button
      altText=""
      customStyle="hidden"
      loading={loading}
      display=""
      href=""
      onClick={handleSubmit} // Pass handleSubmit to the button
      altOnClick={""}
    >
      <DefaultInput
        name="email"
        onChange={handleChange}
        size="lg"
        value={email}
        type="email"
        label="Email address"
      />
    </AuthContainer>
  );
};

export default Welcome;
