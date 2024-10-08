// import React from "react";
// import AuthContainer from "@/components/auth/Container";
// import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
// import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
// import { CountryIcon } from "../../../../public/assets/icons/index";

// const SignUp = () => {
//   return (
//     <AuthContainer
//       src={DefaultImage}
//       title="Create a new account"
//       text="Safe and Secure. We will never share your data."
//       terms="By creating an account, you agree to Halal wealth’s"
//       path="#"
//       link="Privacy Policy, Terms of Use, and Investment Disclaimer."
//       underline="underline"
//       btnText="Create account"
//       altText="Already have an account?"
//       customStyle=""
//       display="hidden"
//       href=""
//       onClick={""}
//       altOnClick={""}
//     >
//       <DefaultInput
//         size="lg"
//         value="placeholder"
//         type="email"
//         CustomStyle="mb-4"
//         label="Email address"
//       />
//       <IconInput
//         onChange={''}
//         value="000-000-0000"
//         size="lg"
//         type="tel"
//         icon={<CountryIcon />}
//         RighIcon={""}
//         handleClick={""}
//         CustomStyle="pl-[40px]"
//         label="Phone number"
//       />
//     </AuthContainer>
//   );
// };

// export default SignUp;

"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../../public/assets/images/DefaultImage.png";
import {
  DefaultInput,
  IconInput,
  OptionsSelect,
} from "@/components/reusable/input/Input";
import { CountryIcon, HideIcon, ShowIcon } from "../../../../../public/assets/icons";

const SignUp = () => {
  const options = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
      onClick={""}
      altOnClick={""}
    >
      <DefaultInput
        size="lg"
        value="placeholder"
        type="text"
        CustomStyle="mb-4"
        label="Account Number"
      />

      <OptionsSelect CustomStyle="mb-4" label="Select Bank" options={options}/>

      <DefaultInput
        size="lg"
        value="placeholder"
        type="email"
        CustomStyle="mb-4"
        label="Email address"
      />

      <DefaultInput
        size="lg"
        value="placeholder"
        type="tel"
        CustomStyle="mb-4"
        label="Phone number"
      />

      <IconInput
        onChange={""}
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

export default SignUp;