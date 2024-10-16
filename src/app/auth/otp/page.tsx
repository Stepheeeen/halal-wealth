"use client";
import { useState, useEffect } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ConfirmEmailOTP = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(29); // Countdown starting at 29 seconds
  const [canResend, setCanResend] = useState(false); // To manage the resend link availability

  // Update OTP input value
  const handleChange = (value: any) => {
    setOtp(value);
  };

  // Countdown logic
  useEffect(() => {
    let timer: any;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true); // Enable the resend link when countdown reaches 0
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Handle OTP submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/onboarding/verify-email",
        { otp },
        {
          headers: {
            AnonymousId: "web",
          },
        }
      );
      toast.success(res.statusText);
      router.push("/auth/create-pin");
    } catch (error: any) {
      toast.error(error.response.statusText);
    }
  };

  // Handle Resend OTP
  const handleResendOTP = async () => {
    const email = localStorage.getItem("userEmail")
    console.log(email)
    try {
      // Your resend OTP logic here (e.g., API call to resend OTP)
      const response = await axios.post(`/api/onboarding/re-sendOtp?email=${email}`);
      toast.success("OTP resent successfully", response.data);
      setCountdown(29); // Reset the countdown
      setCanResend(false); // Disable the link again
    } catch (error) {
      toast.error("Failed to resend OTP");
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Confirm your email address"
      text="Please enter the 6-digit code sent to your email address"
      terms="Didn’t get the code? "
      path="#"
      // Dynamically update the resend link text based on countdown
      link={
        canResend ? (
          <span
            onClick={handleResendOTP}
            className="text-blue-500 cursor-pointer"
          >
            Resend OTP
          </span>
        ) : (
          `Resend in 00:${countdown < 10 ? `0${countdown}` : countdown}`
        )
      }
      underline=""
      btnText="Continue"
      altText=""
      customStyle="hidden"
      display=""
      href=""
      onClick={handleSubmit}
      altOnClick={""}
    >
      <DefaultPinInput length={6} otp onChange={handleChange} />
    </AuthContainer>
  );
};

export default ConfirmEmailOTP;
