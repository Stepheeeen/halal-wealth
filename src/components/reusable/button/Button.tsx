import React from "react";
import { Button,} from "@chakra-ui/react";

const DefaultButton = ({
  type,
  text,
  customStyle,
}: {
  type: string;
  text: string;
  customStyle: string;
}) => {
  return (
    <Button
      variant={type}
      className={`px-4 py-3 w-full rounded-lg ${customStyle}`}
    >
      {text}
    </Button>
  );
};

export { DefaultButton };
