
import React from "react";
import { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";

const Welcome = () => {
  return (
    <AuthContainer
      src={DefaultImage}
      title="Enter email address"
      text="Enter your email to reset your password"
      terms=""
      path="#"
      link=""
      underline=""
      btnText="Continue"
      altText=""
      customStyle="hidden"
      display=""
    >
      <DefaultInput
        size="lg"
        value="placeholder"
        type="email"
        CustomStyle=""
        label="Email address"
      />
    </AuthContainer>
  );
};

export default Welcome;
