// "use client"
// import { useState } from "react";
// import AuthContainer from "@/components/auth/Container";
// import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
// import { DefaultPinInput } from "@/components/reusable/input/Input";
// import axios from "axios";
// import { toast } from 'react-toastify';

// const ConfirmEmailOTP = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/onboarding/verify-email', credentials);
//       toast.success(`Logged in: ${res.data.username}`);
//     } catch (error) {
//       toast.error('Login failed');
//     }
//   };

//   return (
//     <AuthContainer
//       src={DefaultImage}
//       title="Confirm your email address"
//       text="Please enter the 6-digit code sent to your email address"
//       terms="Didn’t get the code?  "
//       path="#"
//       link="Resend in 00:29"
//       underline=""
//       btnText="Continue"
//       altText=""
//       customStyle="hidden"
//       display=""
//       href=""
//       onClick={handleSubmit}
//       altOnClick={""}
//     >
//        <DefaultPinInput
//         length={6}
//         otp
//       />
//     </AuthContainer>
//   );
// };

// export default ConfirmEmailOTP ;

"use client";
import { useState } from "react";
import AuthContainer from "@/components/auth/Container";
import DefaultImage from "../../../../public/assets/images/DefaultImage.png";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import axios from "axios";
import { toast } from "react-toastify";

const ConfirmEmailOTP = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (value: any) => {
    setOtp(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/confirm-otp", { otp });
      toast.success(`Logged in: ${res.data.username}`);
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <AuthContainer
      src={DefaultImage}
      title="Confirm your email address"
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
      onClick={handleSubmit}
      altOnClick={""}
    >
      <DefaultPinInput length={6} otp onChange={handleChange} />
    </AuthContainer>
  );
};

export default ConfirmEmailOTP;
