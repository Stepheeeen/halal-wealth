"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // For redirecting after successful login

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = () => setShow(!show);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/onboarding/user-login", {
        email,
        password,
      });
      console.log(res.data.status)
      // Checking API response status
      if (res.data.status === 200) {
        toast.success("Login successful");
        // Uncomment to redirect to the dashboard or OTP page after success
        router.push("/dashboard/home");
      } else {
        toast.error(`${res.data.description}`);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Sign in to your account"
      text="Securely sign in to your Halal wealth account"
      terms=""
      path="/auth/forgot-password"
      link="I forgot my password"
      underline=""
      btnText="Sign In"
      altText="Don’t have an account?"
      customStyle=""
      display="hidden"
      href=""
      onClick={handleSignIn} // Updated to call handleSignIn on form submission
      altOnClick={() => {
        router.push("/auth/method");
      }}
    >
      <DefaultInput
        size="lg"
        value={email}
        type="email"
        name="email"
        onChange={(e: any) => setEmail(e.target.value)}
        CustomStyle="mb-4"
        label="Email address"
      />
      <IconInput
        onChange={(e: any) => setPassword(e.target.value)}
        name="password"
        value={password}
        size="lg"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        icon={""}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Password"
      />
    </AuthContainer>
  );
};

export default SignIn;
