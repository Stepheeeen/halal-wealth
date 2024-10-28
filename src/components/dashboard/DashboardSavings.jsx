// components/dashboard/DashboardSavings.jsx
import React from "react";
import { CustomButton } from "@/components/reusable/button/Button";
import Image from "next/image";
import Bag from "../../../public/assets/images/savingsImage.png";
import cash from "../../../public/assets/images/cash.png";
import hajj from "../../../public/assets/images/hajj.png";
import woman from "../../../public/assets/images/woman.png";
import couple from "../../../public/assets/images/couple.png";
import eid from "../../../public/assets/images/eid.png";
import { ChildCard } from "../reusable/card/Card";
import { NextIcon } from "../../../public/assets/icons";
import { userInfo } from "@/app/constants";

const DashboardSavings = () => {
  return (
    <ChildCard CardTitle="My savings" cardStyle="w-[50%]">
      <CustomButton
        ButtonStyling="w-[93%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]"
        Context={<Image src={Bag} alt="" className="h-[50px] w-[50px]" />}
        customStyle="shadow rounded-[8px] mt-1"
        icon={<NextIcon />}
        onClick={""}
        text="Savings total"
        type="solid"
        childDiv="flex flex-col-reverse balanceDiv"
        title={`NGN ${userInfo.savingsBalance}`}
      />

      <ChildCard
        CardTitle="Create a new savings plan"
        cardStyle="shadow-none p-0 mt-3"
      >
        <div className="flex items-center justify-between w-full mb-1">
          <CustomButton
            ButtonStyling="w-[96%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]"
            Context={
              <Image
                src={cash}
                alt=""
                className="h-[35px] w-[35px] ml-[-9px] mt-[-14px]"
              />
            }
            customStyle="bg-[#F5F1FE] rounded mt-1 border border-1 border-[#E6DAFC] w-[50%]"
            icon={""}
            onClick={""}
            text="Create a custom savings plan to suit your needs"
            type="solid"
            childDiv="savingsDiv"
            title="Custom savings"
          />
          <CustomButton
            ButtonStyling="w-[94%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]"
            Context={
              <Image
                src={hajj}
                alt=""
                className="h-[35px] w-[35px] ml-[-9px] mt-[-14px]"
              />
            }
            customStyle="bg-[#ECF9F3] rounded ml-[8px] mt-1 border border-1 border-[#D1F0E1] w-[50%]"
            icon={""}
            onClick={""}
            text="Savings plan to help you achieve your goals"
            type="solid"
            childDiv=" savingsDiv"
            title="Hajj & Umrah"
          />
        </div>

        <CustomButton
          ButtonStyling="w-[96%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]"
          Context={
            <Image
              src={woman}
              alt=""
              className="h-[35px] w-[35px] ml-[-9px] mt-[-14px]"
            />
          }
          customStyle="bg-[#F5F1FE] rounded mt-1 border border-1 border-[#E6DAFC]"
          icon={""}
          onClick={""}
          text="Savings plan to help you achieve your goals"
          type="solid"
          childDiv=" savingsDiv"
          title="Aqeeqah"
        />

        <div className="flex items-center justify-between w-full mt-1">
          <CustomButton
            ButtonStyling="w-[94%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]"
            Context={
              <Image
                src={couple}
                alt=""
                className="h-[35px] w-[35px] ml-[-9px] mt-[-14px]"
              />
            }
            customStyle="bg-[#FEF4E6] rounded mt-1 border border-1 border-[#FDE9CE] w-[50%]"
            icon={""}
            onClick={""}
            text="Savings plan to help you achieve your goals"
            type="solid"
            childDiv=" savingsDiv"
            title="Nikkah"
          />
          <CustomButton
            ButtonStyling="w-[94%] flex items-center justify-between text-start ml-2 text-[13px] font-[400]"
            Context={
              <Image
                src={eid}
                alt=""
                className="h-[35px] w-[35px] ml-[-9px] mt-[-14px]"
              />
            }
            customStyle="bg-[#F5F1FE] rounded mt-1 border border-1 border-[#E6DAFC] ml-[8px] mt-1 w-[50%]"
            icon={""}
            onClick={""}
            text="Savings plan to help you achieve your goals"
            type="solid"
            childDiv=" savingsDiv"
            title="Eid"
          />
        </div>
      </ChildCard>
    </ChildCard>
  );
};

export default DashboardSavings;
