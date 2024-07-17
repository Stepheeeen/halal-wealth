
import React from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, OptionsSelect } from "@/components/reusable/input/Input";

const bio = () => {
  const options = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  return (
    <AuthContainer
      src={DefaultImage}
      title="Tell us about yourself"
      text="We will like to know you better"
      terms={``}
      path="#"
      link=""
      underline=""
      btnText="Continue"
      altText=""
      customStyle="hidden"
      display=""
      href=""
    >
      <DefaultInput
        size="lg"
        value="placeholder"
        type="text"
        CustomStyle="mb-4"
        label="First name"
      />

      <DefaultInput
        size="lg"
        value="placeholder"
        type="text"
        CustomStyle="mb-4"
        label="Last name"
      />
      <OptionsSelect CustomStyle="mb-4" label="Gender" options={options} />

      <DefaultInput
        size="lg"
        value="placeholder"
        type="date"
        CustomStyle="mb-[-70px]"
        label="Date of birth"
      />
    </AuthContainer>
  );
};

export default bio;
