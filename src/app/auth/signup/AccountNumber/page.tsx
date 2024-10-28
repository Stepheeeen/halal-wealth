"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../../public/assets/icons";
import { toast } from "react-toastify"; // Notifications
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [bankCode, setBankCode] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [banks, setBanks] = useState<{ bankCode: string; bankName: string }[]>([]);
  const router = useRouter();

  // Fetch banks from API
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get("/api/onboarding/get-banks");
        setBanks(response.data.data ?? []);
      } catch (err) {
        console.error("Failed to fetch banks:", err);
      }
    };
    fetchBanks();
  }, []);

  const handleClick = () => setShow((prevShow) => !prevShow);

  const handleSignup = async () => {
    if (!accountNumber || !bankCode || !emailAddress || !password || !phoneNumber) {
      toast.error("Please fill out all fields and ensure the account number is valid.");
      return;
    }

    if (accountNumber.length < 10) {
      toast.error("Account number is not valid.");
      return;
    }

    const signupData = {
      accountNumber,
      bankCode,
      emailAddress,
      password,
      phoneNumber,
    };

    setIsLoading(true);

    try {
      const response = await axios.post("/api/onboarding/verify-email-signup", signupData, {
        headers: { AnonymousId: "web" },
      });
      if (response.data.status === "4000") {
        toast.error(response.data.description);
      } else {
        toast.success(response.data.description);
      }
      router.push("/auth/otp");
      localStorage.setItem("userEmail", emailAddress);
      localStorage.setItem("requestId", response.data.data.requestId1);
    } catch (err: any) {
      toast.error(err.response.data.description);
      console.error("Signup failed:", err);
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
      btnText="Create account"
      altText="Already have an account?"
      customStyle=""
      display="hidden"
      href=""
      onClick={handleSignup}
      loading={isLoading}  // Pass isLoading prop here
      altOnClick={() => router.push("/auth/signin")}
    >
      <DefaultInput
        size="lg"
        value={accountNumber}
        onChange={(e:any) => setAccountNumber(e.target.value)}
        type="text"
        CustomStyle="mb-4"
        name="accountNumber"
        label="Account Number"
      />

      <label htmlFor="bankCode" className="mb-2 block text-sm font-medium text-gray-700">
        Select Bank
      </label>
      <select
        id="bankCode"
        value={bankCode}
        onChange={(e:any) => setBankCode(e.target.value)}
        className="mb-4 block w-full p-3 border border-gray-300 rounded-lg"
      >
        <option value="" disabled>Select a bank</option>
        {banks.map((bank) => (
          <option key={bank.bankCode} value={bank.bankCode}>{bank.bankName}</option>
        ))}
      </select>

      <DefaultInput
        size="lg"
        value={emailAddress}
        onChange={(e:any) => setEmailAddress(e.target.value)}
        type="email"
        CustomStyle="mb-4"
        name="emailAddress"
        label="Email address"
      />

      <DefaultInput
        size="lg"
        value={phoneNumber}
        onChange={(e:any) => setPhoneNumber(e.target.value)}
        type="tel"
        CustomStyle="mb-4"
        name="phoneNumber"
        label="Phone number"
      />

      <IconInput
        icon=""
        onChange={(e:any) => setPassword(e.target.value)}
        value={password}
        size="lg"
        CustomStyle="mb-4"
        name="password"
        type={show ? "text" : "password"}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Password"
      />
    </AuthContainer>
  );
};

export default SignUp;