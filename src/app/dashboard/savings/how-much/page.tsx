"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackIcon, NairaIcon } from "../../../../../public/assets/icons";
import { DefaultButton } from "@/components/reusable/button/Button";
import { IconInput } from "@/components/reusable/input/Input";

import DashboardContainer from "@/components/dashboard/dashboardContainer";

const Page = () => {
  const router = useRouter();
  const [amount, setAmount] = useState<number | undefined>(undefined);

  //   const storedData = JSON.parse(localStorage.getItem("newSavings") || "{}");

  function saveObject(key: string, newObject: Record<string, any>) {
    const existingDataString = localStorage.getItem(key);
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : {}; // Parse only if it's not null
    const updatedData = { ...existingData, ...newObject };
    localStorage.setItem(key, JSON.stringify(updatedData));
  }

  const handleRoute = () => {
    if (amount) {
      saveObject("newSavings", { amount: Number(amount) }); // Convert amount to number before saving
    }
    router.push("/dashboard/savings/duration");
  };

  return (
    <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <div
          onClick={() => router.back()}
          className="flex items-center mt-2 ml-2"
        >
          <BackIcon /> <span className="font-medium ml-1">Back</span>
        </div>

        <div className="w-[95%] flex items-center justify-between p-4">
          <h1 className="text-[45px] w-[45%] text-wrap font-[480]">
            How much do you want to start with?
          </h1>

          <div className="mt-[20px] ml-3 w-[45%]">
            <h1 className="text-[18px] font-[600] text-[#14013A] w-[95%] mb-3">
              Amount
            </h1>
            <IconInput
              disabled={false}
              iconStyle=""
              name=""
              placeholder=""
              value={amount}
              onChange={(e: any) => {
                setAmount(e.target.value);
              }}
              size="lg"
              type="text"
              icon={<NairaIcon />}
              RighIcon={""}
              handleClick={() => {}}
              CustomStyle="pl-[55px] bg-[#F9FAFB]"
              label=""
            />

            <DefaultButton
              disabled={false}
              isLoading={false}
              type="solid"
              text="Continue"
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
              onClick={handleRoute}
            />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Page;
