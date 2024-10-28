"use client";
import React from "react";
import { DefaultCard } from "@/components/reusable/card/Card";
import Chart from "../../../../../../public/assets/images/chart.png";
import {
  BackIcon,
  NextIconPurple,
} from "../../../../../../public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import DashboardContainer from "@/components/dashboard/dashboardContainer";

const Page = () => {
  const Card = [
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
    { rate: "4.21 - 6.12%" },
  ];
  return (
    <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <div>
          <Link
            href={"/dashboard/invest/balance"}
            className="flex items-center"
          >
            <BackIcon /> <span className="font-medium ml-1">Back</span>
          </Link>
          <h1 className="font-[600] text-[30px] my-2">Sukuk bonds</h1>
        </div>
        <div className="grid grid-cols-3 gap-col-4">
          {Card.map((cards, i) => (
            <DefaultCard
              cardStyle="h-[150px] mt-[11px] p-2 w-[300px] border border-2 rounded-md"
              key={i}
            >
              <div className="flex items-center">
                <div className="w-[25px] h-[25px] rounded-sm bg-[#14013A]"></div>
                <h1 className="font-[500] text-[19px] text-[#14013A] text-wrap ml-2">
                  Lotus Halal Fixed Income Fund
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-[#17B26A] text-[17px] font-[600]">
                    {cards.rate}
                  </h1>
                  <p className="text-[#5C556C] text-[14px] font-[500]">
                    Estimated returns
                  </p>
                </div>

                <Image alt="" src={Chart} className="w-[30%]" />
              </div>

              <div className="flex items-center justify-end">
                <Link
                  href={"#"}
                  className="text-[#8046F2] flex items-center font-[400]"
                >
                  Learn more{" "}
                  <span>
                    {" "}
                    <NextIconPurple />{" "}
                  </span>
                </Link>
              </div>
            </DefaultCard>
          ))}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Page;
