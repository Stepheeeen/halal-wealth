import React from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { CountryIcon } from "../../../../public/assets/icons/index";

const bvn = () => {
  return (
    <AuthContainer
      src={DefaultImage}
      title="BVN Verification"
      text="Verify by submitting your BVN informnation. We do this to verify your identity."
      terms={`Don't know your BVN?`}
      path="#"
      link="Dial *565*0#"
      underline=""
      btnText="Confirm BVN"
      altText="Skip for later"
      customStyle=""
    >
      <DefaultInput
        size="lg"
        value="placeholder"
        type="email"
        CustomStyle="mb-4"
        label="Bank verification number"
      />
    </AuthContainer>
  );
};

export default bvn;
