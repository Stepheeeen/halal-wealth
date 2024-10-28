"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BackIcon } from "../../../../../public/assets/icons";
import { DefaultButton } from "@/components/reusable/button/Button";
import { DefaultInput } from "@/components/reusable/input/Input";
 
import DashboardContainer from "@/components/dashboard/dashboardContainer";

const Page = () => {
  const router = useRouter();
  const [planName, setPlanName] = useState("");

  // Function to save an object in localStorage
  const saveObject = (key: string, newObject: object) => {
    // Get the existing data from localStorage, or default to an empty string if null
    const existingDataString = localStorage.getItem(key);
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : {}; // Parse only if it's not null

    const updatedData = { ...existingData, ...newObject };
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  // Function to handle routing
  const handleRoute = () => {
    saveObject("newSavings", { planName: planName }); // Store data
    router.push("/dashboard/savings/how-much"); // Navigate to the new page
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
        <h1 className="text-[54px] w-[45%] text-wrap font-[480]">
          What are you saving for?
        </h1>

        <div className="mt-[20px] ml-3 w-[45%]">
          <h1 className="text-[18px] font-[600] text-[#14013A] w-[95%] mb-3">
            Give your custom savings plan a name
          </h1>

          <DefaultInput
            CustomStyle=""
            value={planName}
            onChange={(e: any) => {
              setPlanName(e.target.value);
            }}
            label="plan name"
            size="md"
            type="text"
          />

          <p className="text-[14px] font-[500] text-[#5C556C] w-[95%] mt-3">
            Give your plan a name depending on what you’re saving for.
          </p>

          <DefaultButton
            type="solid"
            text="Continue"
            customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-10"
            onClick={handleRoute}
          />
        </div>
      </div>
    </div>
</DashboardContainer>

  );
};

export default Page;
