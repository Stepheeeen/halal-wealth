"use client"
import React, {useState} from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultInput} from "@/components/reusable/input/Input";
import { DefaultModal } from "@/components/reusable/modal/modal";

const bvn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
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
      display=""
      href=""
      onClick={""}
      altOnClick={handleOpen}
    >
      <DefaultInput
        size="lg"
        value="placeholder"
        type="email"
        CustomStyle="mb-4"
        label="Bank verification number"
      />

      
    </AuthContainer>
    <DefaultModal 
    isOpen={isOpen}
    onClose={handleClose}
    onOpen={handleOpen}
    />

    </>
  );
};

export default bvn;
