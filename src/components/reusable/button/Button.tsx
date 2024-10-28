import React from "react";
import { Button, Spinner } from "@chakra-ui/react";
import { Content } from "next/font/google";

const DefaultButton = ({
  type,
  text,
  customStyle,
  onClick,
  disabled,
  isLoading,
}: {
  type: string;
  text: string;
  customStyle: string;
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}) => {
  return (
    <Button
      variant={type}
      className={`px-4 py-3 w-full rounded-lg ${customStyle}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="absolute flex items-center justify-center">
          <svg
            className="animate-spin text-white"
            width="25px"
            height="25px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      ) : (
        text
      )}
    </Button>
  );
};

const CustomButton = ({
  type,
  text,
  customStyle,
  onClick,
  Context,
  ButtonStyling,
  childDiv,
  icon,
  title,
}: {
  type: string;
  text: any;
  customStyle: string;
  onClick: any;
  Context: any;
  ButtonStyling: string;
  childDiv: string;
  icon: any;
  title: string;
}) => {
  return (
    <Button
      variant={type}
      className={`px-4 py-3 w-full rounded-lg ${customStyle}`}
      onClick={onClick}
    >
      {Context}
      <div className={`${ButtonStyling}`}>
        <div className={`${childDiv}`}>
          <div className="dashboardH1">
            <p className="text-wrap">{title}</p>
          </div>
          {text}
        </div>

        {icon}
      </div>
    </Button>
  );
};

const BadgeButton = () => {
  return (
    <p className="p-1 rounded-full border-[1.5px] border-[#f2f4f7] bg-[#F9FAFB] text-[#5C556C] text-[12px] grid place-items-center font-[500]">
      Non submitted
    </p>
  );
};

const BadgeButtonPending = () => {
  return (
    <p className="p-1 rounded-full border-[1.5px] border-[#FDE9CE] bg-[#FEF4E6] text-[#F79009] text-[12px] grid place-items-center font-[500]">
      Submitted
    </p>
  );
};
const BadgeButtonSuccess = () => {
  return (
    <p className="p-1 rounded-full border-[1.5px] border-[#D1F0E1] bg-[#ECF9F3] text-[#17B26A] text-[12px] grid place-items-center font-[500]">
      Verified
    </p>
  );
};

export {
  DefaultButton,
  CustomButton,
  BadgeButton,
  BadgeButtonPending,
  BadgeButtonSuccess,
};
