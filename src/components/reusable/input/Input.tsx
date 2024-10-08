import React from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { PinInput, PinInputField, PinInputProps } from "@chakra-ui/react";



const InputLabel = ({ label }: { label: string }) => {
  return <p className="mb-[5px] font-medium text-[15px]">{label}</p>;
};

const DefaultInput = ({
  value,
  size,
  CustomStyle,
  label,
  type,
}: {
  value: string;
  size: string;
  CustomStyle: string;
  label: string;
  type: string;
}) => {
  return (
    <>
      <InputLabel label={label} />
      <Input
        placeholder={value}
        type={type}
        size={size}
        variant="filled"
        className={`px-4 py-2 w-full rounded-md bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
      />
    </>
  );
};
const IconInput = ({
  icon,
  type,
  value,
  size,
  CustomStyle,
  label,
  RighIcon,
  handleClick,
  onChange,
}: {
  icon: any;
  type: string;
  value: string;
  size: string;
  CustomStyle: string;
  label: string;
  RighIcon: any;
  handleClick: any;
  onChange: any;
}) => {
  return (
    <>
      <InputLabel label={label} />
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          className="h-full flex items-center pl-3"
        >
          <span className="">{icon}</span>
        </InputLeftElement>
        <Input
          placeholder={value}
          size={size}
          variant="filled"
          type={type}
          onChange={onChange}
          className={` px-4 py-2 w-full rounded-md bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
        />
        <InputRightElement
          className="h-full flex items-center cursor-pointer pr-3 pb-3"
          onClick={handleClick}
        >
          <span className="">{RighIcon}</span>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

interface Option {
  value: string;
  text: string;
}
const OptionsSelect = ({
  label,
  options,
  CustomStyle,
}: {
  label: string;
  options: Option[];
  CustomStyle: string;
}) => {
  return (
    <>
      <InputLabel label={label} />
      <Select
        placeholder="Placeholder"
        size="lg"
        className={` px-4 py-2 w-full rounded-md bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
      >
        {options.map((opt: Option) => (
          <option value={opt.value} key={opt.value}>
            {opt.text}
          </option>
        ))}
      </Select>
    </>
  );
};


type DefaultPinInputProps = Omit<PinInputProps, 'children'> & {
  length: number;
};
const DefaultPinInput = ({ length, ...props }: DefaultPinInputProps) => {
  return (
    <PinInput {...props}>
      {Array.from({ length }, (_, index) => (
        <PinInputField key={index} className="w-[60px] h-[60px] mr-[10px] rounded-lg text-center bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-blue-500" />
      ))}
    </PinInput>
  );
};

export { DefaultInput, IconInput, InputLabel, OptionsSelect, DefaultPinInput };
