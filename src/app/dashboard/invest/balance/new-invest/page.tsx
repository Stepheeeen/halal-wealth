import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { DefaultCard } from "@/components/reusable/card/Card";
import {
  BackIcon,
  NextIconPurple,
} from "../../../../../../public/assets/icons";
import Chart from "../../../../../../public/assets/images/chart.png";
import ChartLg from "../../../../../../public/assets/images/chart-Lg.png";
import {
  CustomButton,
  DefaultButton,
} from "@/components/reusable/button/Button";
import DashboardContainer from "@/components/dashboard/dashboardContainer";

const Page = () => {
  return (
    <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        <div>
          <div>
            <Link href={"]"} className="flex items-center">
              <BackIcon /> <span className="font-medium ml-1">Back</span>
            </Link>
            <h1 className="font-[600] text-[30px] my-2">Sukuk bonds</h1>
            <div className="flex items-center justify-between w-full">
              <DefaultCard cardStyle="h-[150px] mt-[11px] p-2 w-[450px] rounded-md">
                <div className="flex items-center justify-between">
                  <h1 className="font-[550] text-[21px] w-[50%] text-[#14013A] text-wrap">
                    Lotus Halal Fixed Income Fund
                  </h1>
                  <div className="w-[40px] h-[40px] rounded-sm bg-[#14013A]"></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h1 className="text-[#17B26A] text-[17px] font-[600] mt-1">
                      4.21 - 6.12%
                    </h1>
                    <p className="text-[#5C556C] text-[14px] font-[500]">
                      Estimated returns
                    </p>
                  </div>

                  <Image alt="" src={Chart} className="w-[30%]" />
                </div>
              </DefaultCard>

              <div className="w-[12%]">
                <DefaultButton
                  customStyle="w-auto bg-[#8046F2] text-white font-medium px-8 py-2 mt-[-20px] mr-3"
                  onClick={()=>{}}
                  disabled={false}
                  isLoading={false}
                  text="Invest"
                  type="solid"
                />
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-[15px] text-[#5C556C]">
                ANNUAL RETURNS PERFORMANCE HISTORY
              </h1>
              <ul className="w-[40%] flex items-center justify-between mt-2">
                <li>
                  <h1>2019</h1>
                  <p className="text-[#8046F2] font-[450] mt-1">8.01%</p>
                </li>
                <li className="border border-x-1 w-[25%] grid place-content-center border-y-0 border-[#CECCD3]">
                  <h1>2020</h1>
                  <p className="text-[#8046F2] font-[450] mt-1">7.01%</p>
                </li>
                <li>
                  <h1>2021</h1>
                  <p className="text-[#8046F2] font-[450] mt-1">7.01%</p>
                </li>
              </ul>
            </div>
          </div>

          <Image alt="" src={ChartLg} className="mt-[20px]" />

          <div className="mt-3">
            <p className="text-[14px] text-[#5C556C]">Investment overview</p>

            <div>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Overview
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Risk
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        How you earn
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Page;
