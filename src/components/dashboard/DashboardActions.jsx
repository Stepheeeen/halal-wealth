// components/dashboard/DashboardActions.jsx
import React from "react";
import { CustomButton } from "@/components/reusable/button/Button";
import {
  NetworkIcon,
  CableIcon,
  InternetIcon,
  ElectricIcon,
  NextIcon,
  NextIconPurple,
} from "../../../public/assets/icons";
import Image from "next/image";
import PieChartImage from "../../../public/assets/images/pieChartImage.png";
import Chart from "../../../public/assets/images/Chart-Contain.png";
import { ChildCard, DefaultCard } from "../reusable/card/Card";
import Link from "next/link";

const DashboardActions = ({
  AirtimeOpen,
  CableOpen,
  InternetOpen,
  ElectricityOpen,
}) => {
  return (
    <div className="w-full mt-3 py-2 flex items-center justify-between">
      <ChildCard CardTitle="Pay Bills faster" cardStyle="w-[43%]">
        <div className="flex items-center ml-[-10px] mt-3">
          <CustomButton
            Context={<NetworkIcon />}
            customStyle="flex flex-col text-[13px] font-[500]"
            onClick={AirtimeOpen}
            text="Airtime & Data"
            type="ghost"
            ButtonStyling="mt-1"
            icon={""}
            childDiv=""
            title=""
          />
          <CustomButton
            Context={<CableIcon />}
            customStyle="flex flex-col text-[13px] font-[500]"
            onClick={CableOpen}
            text="Cable TV"
            type="ghost"
            ButtonStyling="mt-1"
            icon={""}
            childDiv=""
            title=""
          />
          <CustomButton
            Context={<InternetIcon />}
            customStyle="flex flex-col text-[13px] font-[500]"
            onClick={InternetOpen}
            text="Internet"
            type="ghost"
            ButtonStyling="mt-1"
            icon={""}
            childDiv=""
            title=""
          />
          <CustomButton
            Context={<ElectricIcon />}
            customStyle="flex flex-col text-[13px] font-[500]"
            onClick={ElectricityOpen}
            text="Electricity"
            type="ghost"
            ButtonStyling="mt-1"
            icon={""}
            childDiv=""
            title=""
          />
        </div>

        <CustomButton
          ButtonStyling="w-[93%] flex items-center justify-between text-start ml-2 text-[14px]"
          Context={
            <Image src={PieChartImage} alt="" className="h-[50px] w-[50px]" />
          }
          customStyle="bg-[#ECF9F3] border border-1 border-[#D1F0E1] rounded-[8px] mt-3"
          icon={<NextIcon />}
          onClick={""}
          text="Get item and pay in installments"
          type="solid"
          childDiv=""
          title="Asset FInancing "
        />
      </ChildCard>

      <ChildCard CardTitle="Top investments today" cardStyle="w-[56%]">
        <div className="w-[100%] whitespace-nowrap overflow-x-auto">
          <div className=" inline-flex space-x-4 bg-white">
            <DefaultCard cardStyle="h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md">
              <div className="flex items-center">
                <div className="w-[25px] h-[25px] rounded-sm bg-[#14013A]"></div>
                <h1 className="font-[500] text-[19px] text-[#14013A] text-wrap ml-2">
                  Lotus Halal Fixed Income Fund
                </h1>
              </div>
              <div className="flex items-center justify-between mt-[10px]">
                <div>
                  <h1 className="text-[#17B26A] text-[17px] font-[600]">
                    4.21 - 6.12%
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
                  className="text-[#8046F2] flex items-center font-[400] mt-4"
                >
                  Learn more{" "}
                  <span>
                    {" "}
                    <NextIconPurple />{" "}
                  </span>
                </Link>
              </div>
            </DefaultCard>
            <DefaultCard cardStyle="h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md">
              <div className="flex items-center">
                <div className="w-[25px] h-[25px] rounded-sm bg-[#14013A]"></div>
                <h1 className="font-[500] text-[19px] text-[#14013A] text-wrap ml-2">
                  Lotus Halal Fixed Income Fund
                </h1>
              </div>
              <div className="flex items-center justify-between mt-[10px]">
                <div>
                  <h1 className="text-[#17B26A] text-[17px] font-[600]">
                    4.21 - 6.12%
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
                  className="text-[#8046F2] flex items-center font-[400] mt-4"
                >
                  Learn more{" "}
                  <span>
                    {" "}
                    <NextIconPurple />{" "}
                  </span>
                </Link>
              </div>
            </DefaultCard>
            <DefaultCard cardStyle="h-[150px] mt-[11px] p-2 w-[350px] border border-2 rounded-md">
              <div className="flex items-center">
                <div className="w-[25px] h-[25px] rounded-sm bg-[#14013A]"></div>
                <h1 className="font-[500] text-[19px] text-[#14013A] text-wrap ml-2">
                  Lotus Halal Fixed Income Fund
                </h1>
              </div>
              <div className="flex items-center justify-between mt-[10px]">
                <div>
                  <h1 className="text-[#17B26A] text-[17px] font-[600]">
                    4.21 - 6.12%
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
                  className="text-[#8046F2] flex items-center font-[400] mt-4"
                >
                  Learn more{" "}
                  <span>
                    {" "}
                    <NextIconPurple />{" "}
                  </span>
                </Link>
              </div>
            </DefaultCard>
          </div>
        </div>
      </ChildCard>
    </div>
  );
};

export default DashboardActions;
