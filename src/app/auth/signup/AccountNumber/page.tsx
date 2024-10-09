"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../../public/assets/icons";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [banks, setBanks] = useState<{ bankCode: string; bankName: string }[]>(
    []
  );

  // Fetch banks from the API
  useEffect(() => {
    const getBanks = async () => {
      try {
        const response = await axios.get("/api/onboarding/get-banks");
        console.log("Banks response:", response.data); // Log the response to check its structure
        // Access the 'data' property from the response
        setBanks(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (err) {
        console.error("Failed to fetch banks:", err);
      }
    };
    getBanks();
  }, []);

  const handleClick = () => setShow(!show);

  const handleSignup = async () => {
    if (
      !accountNumber ||
      !bankCode ||
      !emailAddress ||
      !password ||
      !phoneNumber
    ) {
      setError("Please fill out all fields.");
      return;
    }

    const signupData = {
      accountNumber,
      bankCode,
      emailAddress,
      password,
      phoneNumber,
    };

    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "/api/onboarding/verify-email-signup",
        signupData
      );
      alert("Signup successful!");
      console.log("Signup response:", response.data);
    } catch (err) {
      setError("Signup failed. Please try again.");
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
      btnText={isLoading ? "Creating account..." : "Create account"}
      altText="Already have an account?"
      customStyle=""
      display="hidden"
      href=""
      onClick={handleSignup}
      altOnClick=""
    >
      <DefaultInput
        size="lg"
        value={accountNumber}
        onChange={(e: any) => setAccountNumber(e.target.value)}
        type="text"
        CustomStyle="mb-4"
        name="accountNumber"
        label="Account Number"
      />

      <label
        htmlFor="bankCode"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Select Bank
      </label>
      <select
        id="bankCode"
        value={bankCode}
        onChange={(e: any) => setBankCode(e.target.value)}
        className="mb-4 block w-full p-3 border border-gray-300 rounded-lg"
      >
        <option value="" disabled>
          Select a bank
        </option>
        {banks.map((bank) => (
          <option key={bank.bankCode} value={bank.bankCode}>
            {bank.bankName}
          </option>
        ))}
      </select>

      <DefaultInput
        size="lg"
        value={emailAddress}
        onChange={(e: any) => setEmailAddress(e.target.value)}
        type="email"
        CustomStyle="mb-4"
        name="emailAddress"
        label="Email address"
      />

      <DefaultInput
        size="lg"
        value={phoneNumber}
        onChange={(e: any) => setPhoneNumber(e.target.value)}
        type="tel"
        name="phoneNumber"
        CustomStyle="mb-4"
        label="Phone number"
      />

      <IconInput
        icon={""}
        onChange={(e: any) => setPassword(e.target.value)}
        value={password}
        size="lg"
        name="password"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Password"
      />

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </AuthContainer>
  );
};

export default SignUp;
