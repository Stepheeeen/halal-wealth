import React from "react";
import { Button,} from "@chakra-ui/react";

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

export { DefaultButton };
