// components/dashboard/DashboardInvestments.jsx
import React from "react";
import { DefaultCard } from "@/components/reusable/card/Card";
import Image from "next/image";
import Chart from "../../../public/assets/images/chart.png";
import Link from "next/link";
import { NextIconPurple } from "../../../public/assets/icons";

const DashboardInvestments = () => {
  const investments = [
    { title: "Lotus Halal Fixed Income Fund", returns: "4.21 - 6.12%" },
    { title: "Equity Growth Fund", returns: "5.50 - 7.00%" },
    { title: "Fixed Income Fund", returns: "4.00 - 5.50%" },
  ];

  return (
    <div className="w-[100%] whitespace-nowrap overflow-x-auto">
      <div className="inline-flex space-x-4 bg-white">
        {investments.map((investment, index) => (
          <DefaultCard key={index} cardStyle="h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md">
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] rounded-sm bg-[#14013A]"></div>
              <h1 className="font-[500] text-[19px] text-[#14013A] text-wrap ml-2">{investment.title}</h1>
            </div>
            <div className="flex items-center justify-between mt-[10px]">
              <div>
                <h1 className="text-[#17B26A] text-[17px] font-[600]">{investment.returns}</h1>
                <p className="text-[#5C556C] text-[14px] font-[500]">Estimated returns</p>
              </div>
              <Image alt="" src={Chart} className="w-[30%]" />
            </div>
            <div className="flex items-center justify-end">
              <Link href="#" className="text-[#8046F2] flex items-center font-[400] mt-4">
                Learn more <NextIconPurple />
              </Link>
            </div>
          </DefaultCard>
        ))}
      </div>
    </div>
  );
};

export default DashboardInvestments;