"use client"
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";

const CreatePin = () => {

    return (
        <AuthContainer
            src={DefaultImage}
            title="Create your PIN"
            text="Create a PIN for your account to secure your transactions."
            terms=" "
            path="#"
            link=""
            underline=""
            btnText="Continue"
            altText=""
            customStyle="hidden"
            display=""
            href=""
            onClick = {""}
            altOnClick = {""}
        >
            <DefaultPinInput
                length={4}
            />
        </AuthContainer>
    );
};

export default CreatePin;
