"use client"
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, OptionsSelect } from "@/components/reusable/input/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"; // For redirecting after form submission

const Bio = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const options = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/onboarding/continue-signup", {
        firstName,
        middleName,
        lastName,
        gender,
        username,
        // dob,
      });
      toast.success("Bio information saved successfully!");
      router.push("/next-page"); // Redirect to the next page after successful submission
    } catch (error) {
      toast.error("Failed to save bio information. Please try again.");
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Tell us about yourself"
      text="We would like to know you better"
      terms={``}
      path="#"
      link=""
      underline=""
      btnText="Continue"
      altText=""
      customStyle="hidden"
      display=""
      href=""
      onClick={handleSubmit} // Submitting the form on button click
      altOnClick={""}
    >
      <DefaultInput
        name="firstName"
        onChange={(e: any) => setFirstName(e.target.value)}
        size="lg"
        value={firstName}
        type="text"
        CustomStyle="mb-4"
        label="First name"
      />

      <DefaultInput
        name="middleName"
        onChange={(e: any) => setMiddleName(e.target.value)}
        size="lg"
        value={middleName}
        type="text"
        CustomStyle="mb-4"
        label="Middle name"
      />

      <DefaultInput
        name="lastName"
        onChange={(e: any) => setLastName(e.target.value)}
        size="lg"
        value={lastName}
        type="text"
        CustomStyle="mb-4"
        label="Last name"
      />

      <DefaultInput
        name="username"
        onChange={(e: any) => setUsername(e.target.value)}
        size="lg"
        value={username}
        type="text"
        CustomStyle="mb-4"
        label="Username"
      />
      <OptionsSelect
        name="gender"
        onChange={(e: any) => setGender(e.target.value)}
        CustomStyle="mb-4"
        label="Gender"
        options={options}
      />

      {/* <DefaultInput
        name="dob"
        onChange={(e: any) => setDob(e.target.value)}
        size="lg"
        value={dob}
        type="date"
        CustomStyle="mb-[-70px]"
        label="Date of birth"
      /> */}
    </AuthContainer>
  );
};

export default Bio;