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
  onChange,
  name,
}: {
  value: string;
  size: string;
  CustomStyle: string;
  label: string;
  type: string;
  onChange: any;
  name: string;
}) => {
  return (
    <>
      <InputLabel label={label} />
      <Input
        placeholder='placeholder'
        value={value}
        type={type}
        size={size}
        name={name}
        variant="filled"
        onChange={onChange}
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
  name,
  disabled,
  iconStyle,
  placeholder
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
  name: string;
  disabled: boolean;
  iconStyle: string;
  placeholder: string;
}) => {
  return (
    <>
      <InputLabel label={label} />
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          className="h-full flex items-center justify-center pl-3 mb-[50%]"
        >
          <span className={iconStyle}>{icon}</span>
        </InputLeftElement>
        <Input
          placeholder={placeholder}
          value={value}
          size={size}
          variant="filled"
          type={type}
          name={name}
          onChange={onChange}
          className={` px-4 py-2 w-full rounded-md bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px] ${CustomStyle}`}
          disabled={disabled}
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
  onChange,
  name,
}: {
  label: string;
  options: Option[];
  CustomStyle: string;
  onChange: any;
  name: any;
}) => {
  return (
    <>
      <InputLabel label={label} />
      <Select
        placeholder="Placeholder"
        size="lg"
        onChange={onChange}
        name={name}
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


type DefaultPinInputProps = Omit<PinInputProps, 'children' | 'onChange'> & {
  length: number;
  onChange?: (value: string) => void; // Define the onChange prop type
};

const DefaultPinInput = ({ length, onChange, ...props }: DefaultPinInputProps) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <PinInput onChange={handleChange} {...props}>
      {Array.from({ length }, (_, index) => (
        <PinInputField 
          key={index} 
          className="w-[60px] h-[60px] mr-[10px] rounded-lg text-center bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      ))}
    </PinInput>
  );
};

export { DefaultInput, IconInput, InputLabel, OptionsSelect, DefaultPinInput };
