"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  BackIcon,
  BankIcon,
  CardIcon,
  WalletIcon,
  WalletIconPurple,
} from "../../../../../public/assets/icons";
import {
  CustomButton,
  DefaultButton,
} from "@/components/reusable/button/Button";
import { CustomModal } from "@/components/reusable/modal/modal";

import { useRouter } from "next/navigation";
import { userInfo } from "@/app/constants";
import DashboardContainer from "@/components/dashboard/dashboardContainer";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("daily");
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
    saveObject("newSavings", { frequency: selected });
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false); // Function to close modal

  return (
    <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <div
          onClick={() => router.back()}
          className="flex items-center mt-2 ml-2"
        >
          <BackIcon /> <span className="font-medium ml-1">Back</span>
        </div>

        <div className="w-[95%] flex items-start justify-between p-4">
          <h1 className="text-[54px] w-[45%] text-wrap font-[480]">
            How often do you want to save
          </h1>

          <div className="ml-3 w-[48%] p-3">
            <div className="px-2 rounded font-[500]">
              <div className="w-full max-w-md p-4">
                {["daily", "weekly", "monthly", "once"].map((option) => (
                  <div
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`p-4 mb-4 border rounded-lg cursor-pointer ${
                      selected === option
                        ? "bg-[#F5F1FE] border-[#D5C1FB]"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                      <span
                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                          selected === option
                            ? "border-[#8046F2]"
                            : "border-gray-400"
                        }`}
                      >
                        {selected === option && (
                          <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}

                <DefaultButton
                  disabled
                  isLoading
                  type="solid"
                  text="Continue"
                  customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-5"
                  onClick={handleOpen}
                />
              </div>
            </div>
          </div>
        </div>

        <CustomModal
          isOpen={open}
          modalTitle=""
          onClose={handleCloseModal}
          ModalStyling=""
        >
          <div>
            <p className="font-[450] ml-[2px] mt-1">
              Select how you want to fund your wallet
            </p>
            <div className="w-full">
              {/* <CustomButton
              icon={""}
              title=""
              type=""
              ButtonStyling=""
              Context={
                <div className="ml-[-70%]">
                  <WalletIcon />
                </div>
              }
              childDiv="ml-3"
              customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5"
              text="Wallet"
            /> */}
              <CustomButton
                ButtonStyling="w-[69%] flex justify-end"
                Context={
                  <div className="flex items-center">
                    <WalletIconPurple /> <p className="ml-1">Wallet</p>
                  </div>
                }
                childDiv="ml-3 flex items-center"
                customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] flex items-center justify-between border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5 px-0"
                icon={""}
                onClick={() => {
                  saveObject("newSavings", { paymentMethod: "Wallet" });
                  router.push("/dashboard/savings/review-plan");
                  handleCloseModal(); // Close modal after selection
                }}
                text={
                  <div className="flex items-center">
                    <p className="text-[15px] font-[450] ml-1">Balance</p>
                    <span className="w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1"></span>
                    <h1 className="text-[#17B26A] font-[570]">
                      ₦ {userInfo.accountBalance}
                    </h1>
                  </div>
                }
                title=""
                type=""
              />
              <CustomButton
                icon={""}
                title=""
                type=""
                ButtonStyling=""
                Context={
                  <div className="ml-[-75%]">
                    <CardIcon />
                  </div>
                }
                childDiv="ml-3"
                customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]"
                onClick={() => {
                  saveObject("newSavings", { paymentMethod: "Card" });
                  router.push("/dashboard/savings/review-plan");
                  handleCloseModal(); // Close modal after selection
                }}
                text="Card"
              />
            </div>
          </div>
        </CustomModal>
      </div>
    </DashboardContainer>
  );
};

export default Page;
