"use client"
import React, { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";

const ForgotPasswordOTP = () => {

    return (
        <AuthContainer
            src={DefaultImage}
            title="Enter OTP"
            text="Please enter the 6-digit code sent to your email address"
            terms="Didn’t get the code?  "
            path="#"
            link="Resend in 00:29"
            underline=""
            btnText="Continue"
            altText=""
            customStyle="hidden"
            display=""
            href=""
            onClick={""}
            altOnClick={""}
        >
            <DefaultPinInput
                length={6}
                otp
            />
        </AuthContainer>
    );
};

export default ForgotPasswordOTP;
