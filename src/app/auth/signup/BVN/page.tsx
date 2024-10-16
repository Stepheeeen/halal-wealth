"use client";
import React, { useState } from "react";
import axios from "axios";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import {
  CountryIcon,
  HideIcon,
  ShowIcon,
} from "../../../../../public/assets/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bvn, setBvn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = () => setShow(!show);

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setError(null);

    try {
      console.log("I was fired");
      const response = await axios.post("/api/onboarding/verify-email-signup", {
        bvn: bvn,
        emailAddress: email,
        phoneNumber: phone,
        password: password,
      }); // Replace with your API endpoint
      console.log(response.data);
      toast.success(response.data.description);
      localStorage.setItem("userEmail", email);
      // Handle success, maybe redirect or display success message
    } catch (err: any) {
      toast.error(err.response.data.description);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Create a new account"
      text="Safe and Secure. We will never share your data."
      terms="By creating an account, you agree to Halal wealth’s"
      path="#"
      link="Privacy Policy, Terms of Use, and Investment Disclaimer."
      underline="underline"
      btnText={isLoading ? "Creating account..." : "Create account"}
      altText="Already have an account?"
      customStyle=""
      display="hidden"
      href=""
      onClick={handleSubmit} // Form submission handler
      altOnClick={() => {
        router.push("/auth/signin");
      }}
    >
      <DefaultInput
        size="lg"
        value={bvn}
        type="text"
        name="bvn"
        CustomStyle="mb-4"
        label="BVN"
        onChange={(e: any) => setBvn(e.target.value)}
      />

      <DefaultInput
        size="lg"
        value={email}
        type="email"
        name="email"
        CustomStyle="mb-4"
        label="Email address"
        onChange={(e: any) => setEmail(e.target.value)}
      />

      <DefaultInput
        size="lg"
        value={phone}
        type="tel"
        name="phone"
        CustomStyle="mb-4"
        label="Phone number"
        onChange={(e: any) => setPhone(e.target.value)}
      />

      <IconInput
        onChange={(e: any) => setPassword(e.target.value)}
        value={password}
        name="password"
        size="lg"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        icon={""}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Password"
      />

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </AuthContainer>
  );
};

export default SignUp;
