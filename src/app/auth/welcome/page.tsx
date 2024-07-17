import React from "react";
import { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { HideIcon, ShowIcon } from "../../../../public/assets/icons";

const Welcome = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <AuthContainer
      src={DefaultImage}
      title="Welcome back, Freeborn!"
      text="Enter your password to continue to your password"
      terms=""
      path="#"
      link="I forgot my password"
      underline=""
      btnText="Sign In"
      altText="Switch Account"
      customStyle=""
      display="hidden"
    >
      <IconInput
        value="password"
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

export default Welcome;
