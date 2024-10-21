"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BackIcon, WalletIcon } from "../../../../../public/assets/icons";
import {
  Radio,
  RadioGroup,
  Stack,
  Button,
  FormControl,
  Box,
} from "@chakra-ui/react";
import { DefaultButton } from "@/components/reusable/button/Button";
import { CustomModal } from "@/components/reusable/modal/modal";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import InvestContainer from "../../invest/page";
import { FormControlLabel } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("3 months");
  const router = useRouter();

  function saveObject(key: string, newObject: Record<string, any>) {
    const existingDataString = localStorage.getItem(key);
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : {}; // Parse only if it's not null
    const updatedData = { ...existingData, ...newObject };
    localStorage.setItem(key, JSON.stringify(updatedData));
  }

  const handleOpen = () => {
    saveObject("newSavings", { duration: selected }); // Convert amount to number before saving
    router.push("/dashboard/savings/frequency");
  };
  return (
    <InvestContainer>
      <div
        onClick={() => router.back()}
        className="flex items-center mt-2 ml-2"
      >
        <BackIcon /> <span className="font-medium ml-1">Back</span>
      </div>

      <div className="w-[95%] flex items-start justify-between p-4">
        <h1 className="text-[54px] w-[45%] text-wrap font-[480]">
          Review Savings plan details
        </h1>

        <div className=" ml-3 w-[48%] p-3">
          <div className="px-2 rounded font-[500]">
            <div className="w-full max-w-md p-4">
              <div
                onClick={() => setSelected("3 months")}
                className={`p-4 mb-4 border rounded-lg cursor-pointer ${
                  selected === "3 months"
                    ? "bg-[#F5F1FE] border-[#D5C1FB]"
                    : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>3 months</span>
                  <span
                    className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                      selected === "3 months"
                        ? "border-[#8046F2]"
                        : "border-gray-400"
                    }`}
                  >
                    {selected === "3 months" && (
                      <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                    )}
                  </span>
                </div>
              </div>

              <div
                onClick={() => setSelected("6 months")}
                className={`p-4 mb-4 border rounded-lg cursor-pointer ${
                  selected === "6 months"
                    ? "bg-[#F5F1FE] border-[#D5C1FB]"
                    : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>6 months</span>
                  <span
                    className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                      selected === "6 months"
                        ? "border-[#8046F2]"
                        : "border-gray-400"
                    }`}
                  >
                    {selected === "6 months" && (
                      <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                    )}
                  </span>
                </div>
              </div>

              <div
                onClick={() => setSelected("1 year")}
                className={`p-4 mb-8 border rounded-lg cursor-pointer ${
                  selected === "1 year"
                    ? "bg-[#F5F1FE] border-[#D5C1FB]"
                    : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>1 year</span>
                  <span
                    className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                      selected === "1 year"
                        ? "border-[#8046F2]"
                        : "border-gray-400"
                    }`}
                  >
                    {selected === "1 year" && (
                      <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                    )}
                  </span>
                </div>
              </div>

              <DefaultButton
                type="solid"
                text="Continue"
                customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-5"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <CustomModal ModalStyling='' isOpen={open} modalTitle='' onClose={handleClose}>
                        <div className=''>
                            <h1 className='text-[16px] font-[550] '>Enter PIN</h1>
                            <p className='text-[13px] font-[430]'>Please enter your transaction PIN</p>
                            <div className='w-full grid place-items-center mt-6'>
                                <div>
                                    <DefaultPinInput
                                        length={4}
                                        otp
                                    />

                                </div>
                                <p className="text-center text-[13px] font-[500] my-12">

                                    Forgot your PIN?
                                    <Link href={''} className={`text-[#8046F2] ml-1`}>
                                        Reset PIN
                                    </Link>
                                </p>
                            </div>


                            <DefaultButton
                                type="solid"
                                text='Continue'
                                customStyle="bg-[#8046F2] text-white font-medium"
                                onClick={''}
                            />
                        </div>
                    </CustomModal> */}
    </InvestContainer>
  );
};

export default Page;
