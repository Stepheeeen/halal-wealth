"use client";
import React from "react";
import { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <AuthContainer
      src={DefaultImage}
      title="Sign in to your account"
      text="Securely sign in to your Halal wealth account"
      terms=""
      path="#"
      link="I forgot my password"
      underline=""
      btnText="Sign In"
      altText="Don’t have an account?"
      customStyle=""
      display="hidden"
      href=""
      onClick={""}
      altOnClick={""}
    >
      <DefaultInput
        size="lg"
        value="placeholder"
        type="email"
        CustomStyle="mb-4"
        label="Email address"
      />
      <IconInput
        onChange={''}
        value="password"
        size="lg"
        CustomStyle="mb-4"
        type={show ? "text" : "password"}
        icon={""}
        handleClick={handleClick}
        RighIcon={show ? <HideIcon /> : <ShowIcon />}
        label="Phone number"
      />
    </AuthContainer>
  );
};

export default SignIn;
