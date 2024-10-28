"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewPassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("/api/onboarding/reset-password", {
        emailAddress: localStorage.getItem("resetEmail"),
        otp: localStorage.getItem("resetPin"),
        password,
        requestId: localStorage.getItem("resetRequestId"),
      });
      if (response.data.status === "2000") {
        toast.success(response.data.description);
        localStorage.removeItem("resetEmail");
        localStorage.removeItem("resetPin");
        localStorage.removeItem("resetRequestId");
        router.push("/auth/signin");
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      toast.error("An error occurred while resetting your password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Create a new password"
      text="Create a new password and keep it safe"
      terms=""
      path="#"
      link=""
      underline=""
      btnText={"Continue"}
      altText=""
      customStyle="hidden"
      display=""
      href=""
      onClick={handleSubmit}
      altOnClick={undefined}
      loading={isLoading} // Pass isLoading to AuthContainer
    >
      <IconInput
        disabled
        iconStyle=""
        name=""
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        size="lg"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        icon=""
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Enter new password"
      />

      <IconInput
        disabled
        iconStyle=""
        name=""
        value={confirmPassword}
        onChange={(e: any) => {
          setConfirmPassword(e.target.value);
        }}
        placeholder="password"
        size="lg"
        CustomStyle=""
        type={show ? "text" : "password"}
        icon=""
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Confirm new password"
      />
    </AuthContainer>
  );
};

export default NewPassword;
