"use client";
import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/dashboardContainer";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  BackIcon,
  FrontIcon,
  LikedIcon,
  LikedIconPurple,
  NextIcon,
  WarningIcon,
  WarningIconRed,
} from "../../../../public/assets/icons";
import { CustomModal } from "@/components/reusable/modal/modal";
import Image from "next/image";
import Select from "@/components/reusable/input/MuiSelect";
import { DefaultCard } from "@/components/reusable/card/Card";
import PesLight from "../../../../public/assets/images/PES-light.png";
import PesBlack from "../../../../public/assets/images/PES-black.png";
import {
  CustomButton,
  DefaultButton,
} from "@/components/reusable/button/Button";
import { MyAssets } from "@/components/asset-financing/TabPanel";

const Page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("3 months");
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [Details, setDetails] = useState(false);
  const handleDetailsOpen = () => setDetails(true);
  const handleDetailsClose = () => setDetails(false);

  const [Delivery, setDelivery] = useState(false);
  const handleDeliveryClose = () => setDelivery(false);

  const [plan, setPlan] = useState(false);

  const handlePlanOpen = () => {
    setDetails(false);
    setPlan(true);
  };
  const handleDeliveryOpen = () => {
    setPlan(false);
    setDelivery(true);
  };

  const handleTabsChange = (index: any) => {
    setSelectedIndex(index);
  };

  const selectBillers = [
    {
      value: "PES",
      label: "PES",
    },
  ];

  const favourite = [
    {
      Src: PesLight,
      productName: "Sony playstation 5 (PS5)",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesBlack,
      productName: "Xbox-Series-X-Black-Edition",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesLight,
      productName: "Sony playstation 5 (PS5)",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesBlack,
      productName: "Xbox-Series-X-Black-Edition",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesLight,
      productName: "Sony playstation 5 (PS5)",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesBlack,
      productName: "Xbox-Series-X-Black-Edition",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesLight,
      productName: "Sony playstation 5 (PS5)",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesBlack,
      productName: "Xbox-Series-X-Black-Edition",
      productDownPrice: "100,000",
      price: "500,000",
    },
  ];

  const favouriteLiked = [
    {
      Src: PesLight,
      productName: "Sony playstation 5 (PS5)",
      productDownPrice: "100,000",
      price: "500,000",
    },
    {
      Src: PesBlack,
      productName: "Xbox-Series-X-Black-Edition",
      productDownPrice: "100,000",
      price: "500,000",
    },
  ];

  const images = [PesLight, PesBlack, PesLight];

  const [liked, setLiked] = useState<boolean[]>(
    Array(favourite.length).fill(false)
  );
  const toggleLike = (index: number) => {
    // Toggle the liked state for the specific card
    const updatedLikedStates = liked.map((liked, i) =>
      i === index ? !liked : liked
    );
    setLiked(updatedLikedStates);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <DashboardContainer PageTItle="Asset financing">
      <div className="bg-[#F9FAFB]">
        <div className="w-full h-[100vh]">
          <Tabs className="w-full" onChange={handleTabsChange}>
            <div className="w-full flex items-center justify-between bg-white px-5 rounded-lg py-1">
              <TabList className="text-[14px] font-[450] text-[#5C5F84] pt-[20px] border-b-2 border-[#fff] w-[30%]">
                <Tab
                  className={`w-1/2 pb-[10px] border-b-2 ${
                    selectedIndex === 0
                      ? "text-[#8046F2] border-[#8046F2]"
                      : "border-white hover:text-black"
                  }`}
                >
                  SHOP
                </Tab>
                <Tab
                  className={`w-1/2 pb-[10px] border-b-2 ${
                    selectedIndex === 1
                      ? "text-[#8046F2] border-[#8046F2]"
                      : "border-white hover:text-black"
                  }`}
                >
                  MY ASSETS
                </Tab>
              </TabList>

              <Button
                variant="solid"
                className="rounded-full w-[40px] h-[40px] bg-[#F9FAFB] grid place-items-center"
                onClick={handleOpen}
              >
                <LikedIcon />
              </Button>
            </div>

            <TabPanels className="w-full p-3">
              <TabPanel className="font-[400] text-[15px]">
                <div className="w-full bg-white rounded-md shadow">
                  <Select
                    selectText="Select Category"
                    MuiBg="white"
                    selectProviders={selectBillers}
                    MuiCss=""
                    onChange={() => {}}
                    value=""
                  />
                </div>

                <div className="grid grid-cols-4 gap-1 ml-2 py-2">
                  {favourite.map((card, i) => (
                    <div key={i} className="mb-3">
                      <DefaultCard cardStyle="bg-[#F2F4F7] w-[220px] h-[245px] p-2 rounded-xl relative grid place-items-center mb-2">
                        <div
                          className="absolute top-2 right-2 cursor-pointer"
                          onClick={() => toggleLike(i)}
                        >
                          {liked[i] ? <LikedIconPurple /> : <LikedIcon />}
                        </div>
                        <Image
                          alt="asset categories"
                          src={card.Src}
                          className="w-[150px] h-[160px] cursor-pointer"
                          onClick={handleDetailsOpen}
                        />
                      </DefaultCard>
                      <h1 className="text-[#14013A] font-[500] text-[16px]">
                        {card.productName}
                      </h1>
                      <p className="text-[#5C556C] font-[470] text-[15px]">
                        Down payment: NGN {card.productDownPrice}
                      </p>
                      <h1 className="text-[#8046F2] font-[570] text-[17px]">
                        NGN {card.price}
                      </h1>
                    </div>
                  ))}
                </div>
              </TabPanel>

              <TabPanel className="font-[400] text-[15px] pb-3 overflow-scroll max-h-full">
                <MyAssets />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <CustomModal
        ModalStyling="overflow-scroll p-0"
        modalTitle="Liked"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className="grid grid-cols-2 gap-3 ml-2 py-2">
          {favouriteLiked.map((card, i) => (
            <div key={i} className="mb-3">
              <DefaultCard cardStyle="bg-[#F2F4F7] h-[186px] p-2 rounded-xl relative grid place-items-center mb-2">
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => toggleLike(i)}
                >
                  {liked[i] ? <LikedIcon /> : <LikedIconPurple />}
                </div>
                <Image
                  alt="asset categories"
                  src={card.Src}
                  className="w-[110px]"
                />
              </DefaultCard>
              <h1 className="text-[#14013A] font-[450] text-[13px]">
                {card.productName}
              </h1>
              <p className="text-[#5C556C] font-[400] text-[12px]">
                Down payment: NGN {card.productDownPrice}
              </p>
              <h1 className="text-[#8046F2] font-[470] text-[14px]">
                NGN {card.price}
              </h1>
            </div>
          ))}
        </div>
      </CustomModal>

      <CustomModal
        ModalStyling="overflow-y-scroll overflow-x-hidden"
        modalTitle="Details"
        isOpen={Details}
        onClose={handleDetailsClose}
      >
        <div className="relative w-full h-[250px] grid place-content-center max-w-md mx-auto p-2">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full rounded-lg transform transition-transform duration-500 ease-in-out"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
          >
            <BackIcon />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            <FrontIcon />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-[5px] w-2 mx-[3px] rounded-full ${
                  currentIndex === index ? "bg-purple-600 w-6" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <hr className="w-[400px] ml-[-11px] shadow" />
        <div className="w-full relative py-3">
          {favourite.length > 0 && (
            <div>
              <h1 className="text-[#14013A] font-[550] text-[18px]">
                {favourite[0].productName}
              </h1>
              <h1 className="text-[#8046F2] font-[570] my-1 text-[18px]">
                NGN {favourite[0].price}
              </h1>
              <p className="text-[#5C556C] font-[450] text-[14px]">
                Down payment: NGN {favourite[0].productDownPrice}{" "}
                <span className="text-[#5C556C]">(6 months installment)</span>
              </p>
              <div className="absolute top-3 right-2 cursor-pointer">
                <LikedIconPurple />
              </div>
            </div>
          )}
        </div>
        <div className="p-2 rounded-sm bg-[#F9FAFB] my-3 text-wrap">
          <h1 className="text-[16px] font-[500] text-[#14013A]">Description</h1>

          <p className="text-[#5C556C] text-[14px] font-[450] mt-1">
            Lorem ipsum sit amet dolor relictum expurgartionis isssisisiisis
            isiinferalis, Lorem ipsum sit amet dolor relictum expurgartionis
            inferalis Lorem ipsum sit amet
          </p>
        </div>
        <div className="bg-[#F7E4E7] p-1 mt-3">
          <div className="border border-[#D7808F] bg-[#F7E4E7] rounded-sm flex px-1 py-2">
            <div className="flex-shrink-0 p-2">
              <WarningIconRed />
            </div>
            <div className="ml-2">
              <h3 className="text-sm font-semibold text-gray-800">
                Sorry, you’re not eligible yet
              </h3>
              <p className="text-sm text-gray-600">
                To unlock this feature, simply engage in more transactions on
                our app.
              </p>
            </div>
          </div>
        </div>

        <DefaultButton
          disabled={false}
          isLoading={false}
          type="solid"
          text="Request asset"
          customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-6"
          onClick={handlePlanOpen}
        />
      </CustomModal>

      <CustomModal
        ModalStyling=""
        modalTitle=""
        isOpen={plan}
        onClose={() => {
          setPlan(false);
        }}
      >
        <div className="w-full">
          <p>Great</p>
          <h1 className="font-[550] mb-4">
            How would you like to pay back <br />
            for this asset?
          </h1>
          <div className="rounded font-[500]">
            <div className="w-full max-w-md">
              <div
                onClick={() => setSelected("3 months")}
                className={`p-4 mb-4 border rounded-lg cursor-pointer ${
                  selected === "3 months"
                    ? "bg-[#F5F1FE] border-[#D5C1FB]"
                    : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>
                    <div>
                      <h1>3 months repayment plan</h1>
                      <p className="font-[400] text-[14px]">
                        You pay{" "}
                        <strong className="font-[500] text-[15px]">
                          NGN 5,000
                        </strong>{" "}
                        per month
                      </p>
                    </div>
                  </span>

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
                  <span>
                    <div>
                      <h1>6 months repayment plan</h1>
                      <p className="font-[400] text-[14px]">
                        You pay{" "}
                        <strong className="font-[500] text-[15px]">
                          NGN 3,000
                        </strong>{" "}
                        per month
                      </p>
                    </div>
                  </span>
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
                  <span>
                    <div>
                      <h1>1 year repayment plan</h1>
                      <p className="font-[400] text-[14px]">
                        You pay{" "}
                        <strong className="font-[500] text-[15px]">
                          NGN 1,500
                        </strong>{" "}
                        per month
                      </p>
                    </div>
                  </span>
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
                disabled={false}
                isLoading={false}
                type="solid"
                text="Continue"
                customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-10"
                onClick={handleDeliveryOpen}
              />
            </div>
          </div>
        </div>
      </CustomModal>

      <CustomModal
        ModalStyling=""
        modalTitle=""
        isOpen={Delivery}
        onClose={handleDeliveryClose}
      >
        <div className="w-full">
          <p>How can we contact you?</p>
          <h1 className="font-[550] mb-4">
            Please enter your delivery address
          </h1>
          <div></div>
        </div>
      </CustomModal>
    </DashboardContainer>
  );
};

export default Page;
