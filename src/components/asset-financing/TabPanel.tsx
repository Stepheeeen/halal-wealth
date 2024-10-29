"use client";
import React, { useState } from "react";
import Image from "next/image";
import PesLight from "../../../public/assets/images/PES-light.png";
import PesBlack from "../../../public/assets/images/PES-black.png";
import { DefaultButton } from "../reusable/button/Button";
import { CustomModal } from "../reusable/modal/modal";
import {
  BackIcon,
  CalenderIcon,
  Credit,
  Debit,
  FrontIcon,
  LikedIconPurple,
  TransactionStatus,
  WarningIcon,
} from "../../../public/assets/icons";
import { ChildCard } from "../reusable/card/Card";

const MyAssets = () => {
  const [details, setDetails] = useState<null | number>(null);
  const myAsset = [
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 70000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 90000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 5000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 25000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 205000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 5000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 87700,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 450000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 250000,
      value: 73,
    },
    {
      AssetName: "Name of asset",
      Amount: 500000,
      ProductImage: PesLight,
      AmountPaid: 350000,
      value: 73,
    },
  ];

  const history = [
    { status: <TransactionStatus />, amount: "100", date: "18 March 2022" },
    { status: <TransactionStatus />, amount: "100", date: "18 March 2022" },
    { status: <TransactionStatus />, amount: "100", date: "18 March 2022" },
  ];

  const images = [PesLight, PesBlack, PesLight];

  const formatNumber = (number: number) => {
    return number.toLocaleString();
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
    <div className="grid grid-cols-3 gap-3 bg-[#F9FAFB] py-3">
      {myAsset.map((card, i) => {
        const percentage = Math.floor((card.AmountPaid / card.Amount) * 100);
        return (
          <div
            key={i}
            className="p-3 shadow bg-[#FFFFFF] flex flex-col justify-center rounded"
          >
            <div className="flex justify-between items-center py-2">
              {/* Ensure Image component has width and height values */}
              <Image
                src={card.ProductImage}
                alt=""
                width={44}
                height={44}
                className="w-[44px] h-[44px]"
              />

              <div className="w-[85%] mx-1">
                <p className="text-[#5C556C] font-[400] text-[12px]">
                  {card.AssetName}
                </p>

                <h1 className="text-[#5C556C] font-[450] text-[13px] flex items-center">
                  Amount
                  <span className="w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1"></span>
                  <span className="text-[#17B26A] font-[600]">
                    NGN {formatNumber(card.Amount)}
                  </span>
                </h1>
              </div>

              <p className="font-[500] text-[#14013A] text-[18px]">
                {percentage}%
              </p>
            </div>

            <div className="relative h-1 w-full rounded-full bg-[#E6DAFC]">
              <div
                className="absolute h-full bg-[#8046F2] rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex justify-between items-center py-2 w-full">
              <div className="w-[70%]">
                <p className="text-[#030517] font-[450] text-[14px]">
                  Amount paid
                </p>
                <h1 className="text-[#14013A] font-[550] text-[16px]">
                  NGN {formatNumber(card.AmountPaid)}
                </h1>
              </div>

              <div className="w-[30%]">
                <DefaultButton
                   disabled={false}
                  isLoading
                  customStyle="bg-[#8046F2] text-white w-auto h-[37px] rounded-[3px] font-[450]"
                  onClick={() => setDetails(i)}
                  text="Pay"
                  type="solid"
                />
              </div>
            </div>

            {/* Modal handling */}
            <CustomModal
              ModalStyling="overflow-y-scroll overflow-x-hidden"
              isOpen={details === i}
              modalTitle="Details"
              onClose={() => setDetails(null)}
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
                        currentIndex === index
                          ? "bg-purple-600 w-6"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <hr className="w-[400px] ml-[-11px] shadow" />
              <div className="w-full relative py-3">
                <h1 className="text-[#14013A] font-[550] text-[18px]">
                  {card.AssetName}
                </h1>
                <h1 className="text-[#8046F2] font-[570] my-1 text-[18px]">
                  NGN {formatNumber(card.Amount)}
                </h1>
                <p className="text-[#5C556C] font-[450] text-[14px]">
                  Down payment: NGN {card.AmountPaid}{" "}
                  <span className="text-[#5C556C]">(6 months installment)</span>
                </p>
                <div className="absolute top-3 right-2 cursor-pointer">
                  <LikedIconPurple />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div className="bg-[#ECF9F3] p-1 mt-3">
                  <div className="border border-[#8BD8B4] bg-[#ECF9F3] rounded-sm flex items-center p-1">
                    <div className="flex-shrink-0 p-2 ml-[-5px]">
                      <Credit />
                    </div>
                    <div className="mr-1">
                      <h3 className="text-[13px] text-gray-600">Amount paid</h3>
                      <p className="text-sm font-[550] text-black mt-1">
                        NGN {formatNumber(card.AmountPaid)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7E4E7] p-1 mt-3 ">
                  <div className="border border-[#D7808F] bg-[#F7E4E7] rounded-sm flex items-center p-1">
                    <div className="flex-shrink-0 p-2 ml-[-5px]">
                      <Debit />
                    </div>
                    <div className="mr-1 ">
                      <h3 className="text-[13px] text-gray-600">
                        Amount left to pay
                      </h3>
                      <p className="text-sm font-[550] text-black mt-1">
                        NGN {formatNumber(card.AmountPaid)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1FE] p-1 mt-3">
                <div className="border border-[#BFA2F8] bg-[#F5F1FE] rounded-sm flex items-center p-1">
                  <div className="flex-shrink-0 p-2 ml-[-5px] mb-9">
                    <CalenderIcon />
                  </div>
                  <div className="mr-1 w-full flex items-start justify-between">
                    <div>
                      <h3 className="text-[13px] text-gray-600">
                        Next payment date
                      </h3>
                      <p className="text-sm font-[550] text-black mt-[5px]">
                        Dec 07, 2022
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[13px] text-gray-600">
                        Amount to pay
                      </h3>
                      <p className="text-sm font-[550] text-black mt-[5px]">
                        NGN {formatNumber(card.AmountPaid)}
                      </p>
                      <div className="w-[80%] float-end mt-2">
                        <DefaultButton
                          customStyle="bg-[#8046F2] text-white w-auto h-[33px] rounded-[2.5px] font-[450]"
                          onClick={() => {}}
                           disabled={false}
                          isLoading
                          text="Pay"
                          type="solid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ChildCard CardTitle="Recent activities" cardStyle="mt-5 shadow">
                <ul>
                  {history.map((card, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center mt-2"
                    >
                      <div className="flex items-center">
                        {card.status}
                        <div className="ml-2 grid">
                          <p className="text-[#14013A] font-[500] text-[16px]">
                            NGN {card.amount}
                          </p>
                          <p className="text-[#17B26A] font-[450] text-[14px]">
                            Success
                          </p>
                        </div>
                      </div>
                      <p className="text-[#5C556C] text-[14px] font-[470]">
                        {card.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </ChildCard>
            </CustomModal>
          </div>
        );
      })}
    </div>
  );
};

export { MyAssets };
