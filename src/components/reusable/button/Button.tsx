import React from "react";
import { Button, } from "@chakra-ui/react";
import { Content } from "next/font/google";

const DefaultButton = ({
  type,
  text,
  customStyle,
  onClick,
}: {
  type: string;
  text: string;
  customStyle: string;
  onClick: any;
}) => {
  return (
    <Button
      variant={type}
      className={`px-4 py-3 w-full rounded-lg ${customStyle}`}
      onClick={onClick}
    >
      {text}
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
  text: string;
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
          <h1 className="dashboardH1">
            <p className="text-wrap">
              {title}
            </p>
          </h1>
          {text}
        </div>

        {icon}
      </div>
    </Button>
  );
};


export { DefaultButton, CustomButton };
