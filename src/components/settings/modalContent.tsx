import React, { ReactNode } from "react";
import Image from "next/image";
import profile from "../../../public/assets/images/profileImage.svg";
import {
  BadgeButton,
  BadgeButtonPending,
  BadgeButtonSuccess,
  CustomButton,
  DefaultButton,
} from "../reusable/button/Button";
import {
  DefaultInput,
  IconInput,
  OptionsSelect,
} from "../reusable/input/Input";
import { CountryIcon, NextIcon } from "../../../public/assets/icons";
import { userInfo } from "@/app/constants";

export const ModalContent = () => {
  return <div>modalContent</div>;
};

export const Card = ({
  Title,
  children,
  height,
}: {
  Title: string;
  children: ReactNode;
  height: string;
}) => {
  return (
    <div>
      <h1 className="text-[17px] font-[550] mb-2 text-[#14013A]">{Title}</h1>
      <div
        className={`bg-white shadow-sm rounded-sm mb-3 p-2 h-[${height}] h-[320px]`}
      >
        {children}
      </div>
    </div>
  );
};

export const EditProfile = () => {
  const options = [
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  return (
    <div className="grid place-items-center pb-4">
      <Image alt="" src={profile} className="w-[25%] mb-1" />
      <div className="w-[40%]">
        <DefaultButton
          customStyle="bg-[#F5F1FE] border border-[#E6DAFC] w-[100px] text-[#8046F2] font-[550] text-[14px] mt-2"
          onClick={() => {}}
          disabled
          isLoading
          text="Edit Profile"
          type="solid"
        />
      </div>

      <div className="w-full mt-2">
        <DefaultInput
          name=""
          onChange={() => {}}
          size="lg"
          value={userInfo.firstName}
          type="text"
          CustomStyle="mb-4 border"
          label="First name"
        />
        <DefaultInput
          name=""
          onChange={() => {}}
          size="lg"
          value={userInfo.lastName}
          type="text"
          CustomStyle="mb-4 border"
          label="Last name"
        />
        <DefaultInput
          name=""
          onChange={() => {}}
          size="lg"
          value={userInfo.emailAddress}
          type="email"
          CustomStyle="mb-4 border"
          label="Email Address"
        />
        <OptionsSelect
          name={""}
          onChange={() => {}}
          CustomStyle="mb-4 border"
          label="Gender"
          options={options}
        />

        <DefaultInput
          name=""
          onChange={() => {}}
          size="lg"
          value="placeholder"
          type="date"
          CustomStyle="mb-4 border"
          label="Date of birth"
        />
        <IconInput
          iconStyle=""
          name=""
          placeholder=""
          onChange={""}
          value={userInfo.phoneNumber}
          disabled={true}
          size="lg"
          type="tel"
          icon={<CountryIcon />}
          RighIcon={""}
          handleClick={""}
          CustomStyle="pl-[40px] border"
          label="Phone number"
        />
      </div>

      <DefaultButton
        type="solid"
        text="Save Changes"
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-10"
        onClick={() => {}}
        disabled
        isLoading
      />
    </div>
  );
};

export const IdentityVerification = ({
  onClick3,
  handleBvn,
}: {
  onClick3: any;
  handleBvn: any;
}) => {
  const Identity = [
    { text: "Email Address", badge: <BadgeButton />, onClick: "" },
    {
      text: "Bank verification Number(BVN)",
      badge: <BadgeButtonPending />,
      style: "w-[30%]",
      onClick: handleBvn,
    },
    {
      text: "Upload Government issued ID",
      badge: <BadgeButtonSuccess />,
      style: "w-[30%]",
      onClick: onClick3,
    },
  ];
  return (
    <div>
      <h1 className="font-[500] text-[14px] mb-4">
        To verify your account for better transactions, Please provide the
        following information.
      </h1>

      {Identity.map((link, i) => (
        <div
          onClick={link.onClick}
          className="w-full flex items-center justify-between border border-[#F2F4F7] cursor-pointer px-3 py-5 rounded-lg mb-2"
          key={i}
        >
          <div>
            <h1 className="font-[500] mb-[8px] text-[18px]">{link.text}</h1>

            <div className={`${link.style}`}>{link.badge}</div>
          </div>
          <NextIcon />
        </div>
      ))}
    </div>
  );
};
