"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BackIcon, WalletIcon } from "../../../../../public/assets/icons";
import {
  CustomButton,
  DefaultButton,
} from "@/components/reusable/button/Button";
import { CustomModal } from "@/components/reusable/modal/modal";
import { DefaultPinInput } from "@/components/reusable/input/Input";
import InvestContainer from "../../invest/page";
import { useRouter } from "next/navigation";
import TransactionPinModal from "@/components/reusable/modal/TransactionPin";
import axios from "axios";
import { toast } from "react-toastify";
import { userInfo } from "@/app/constants";

const Page = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const SavingsReview = JSON.parse(localStorage.getItem("newSavings") || "{}");

  const List = [
    { text: "Plan name", value: SavingsReview.planName },
    { text: "Plan type", value: SavingsReview.name },
    {
      text: `Target amount`,
      value: (
        <p className="font-medium text-[#17B26A] text-base">
          ₦ {SavingsReview.amount}
        </p>
      ),
    },
    { text: `Frequency`, value: SavingsReview.frequency },
    { text: `Duration`, value: SavingsReview.duration },
    { text: `Payment method`, value: SavingsReview.paymentMethod },
    // { text: `Investment matures on`, value: "March 10, 2023" },
  ];

  const handleCreatePlan = async (pin: string) => {
    try {
      const response = await axios.post(
        "/api/savings/savings-plan",
        {
          amount: SavingsReview.amount,
          channel: ["card", "ussd"],
          duration: SavingsReview.duration,
          frequency: SavingsReview.frequency,
          paymentMethod: SavingsReview.paymentMethod,
          planName: SavingsReview.planName,
          transactionPin: pin,
        },
        {
          headers: {
            Authorization: userInfo.token,
            anonymousId: "123456",
          },
        }
      );
      console.log(response.data);
      if (response.data.status === "2000") {
        toast.success(response.data.description);
        router.push("/dashboard/savings");
        localStorage.removeItem("newSavings");
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      console.error(error);
    }
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

        <div className="mt-[20px] ml-3 w-[48%] bg-[#F9FAFB] p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5C556C] text-[16px] font-[550]">Summary</p>
            </div>
          </div>

          <div className="bg-white rounded p-2 my-2">
            <ul>
              {List.map((index, key) => (
                <li
                  key={key}
                  className="w-full flex items-center justify-between py-6"
                >
                  <p className="text-[15px] text-[#5C556C]">{index.text}</p>
                  <h1 className="font-[450]">{index.value}</h1>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#ECF9F3] p-1 mt-3">
            <CustomButton
              ButtonStyling=""
              Context={""}
              childDiv=""
              customStyle="font-[500] py-5 border border-[#8BD8B4] bg-[#ECF9F3] rounded-sm "
              icon={""}
              onClick={() => {}}
              text={
                <ul className="w-[90%] m-auto text-wrap text-start list-disc">
                  <li className="text-[14px] font-[450]">
                    You can withdraw from your custom savings plan
                  </li>
                  <li className="text-[14px] font-[450]">
                    Withdrawal requests will take 3 working days to be processed
                  </li>
                </ul>
              }
              title=""
              type=""
            />
          </div>

          <DefaultButton
            type="solid"
            text="Continue"
            customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-5"
            onClick={handleOpen}
          />
        </div>
      </div>

      <TransactionPinModal
        isOpen={open}
        onClose={handleClose}
        onSubmit={handleCreatePlan}
      />
    </InvestContainer>
  );
};

export default Page;
