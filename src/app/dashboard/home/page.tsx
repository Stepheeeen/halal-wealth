// pages/dashboard.jsx
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardContainer from "@/components/dashboard/dashboardContainer";
import DashboardBalanceCard from "@/components/dashboard/DashboardBalanceCard";
import DashboardActions from "@/components/dashboard/DashboardActions";
import DashboardInvestments from "@/components/dashboard/DashboardInvestments";
import DashboardSavings from "@/components/dashboard/DashboardSavings";
import TransactionsCard from "@/components/dashboard/TransactionCard";
import { userInfo } from "@/app/constants";
import { CustomModal, SuccessModal } from "@/components/reusable/modal/modal";
import {
  AirtimeAndData,
  BankTransfer,
  CableTV,
  Electricity,
  FundWallet,
  FundWithCard,
  Internet,
  Withdrawal,
} from "@/components/dashboard/content/modalContent";

const Page = () => {
  const [walletBalance, setWalletBalance] = useState("");
  const [savingsBalance, setSavingsBalance] = useState("");
  const [investmentBalance, setInvestmentBalance] = useState("");
  const [show, setShow] = useState(false);

  // see amount function
  // const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // get amount function
  const [amount, setAmount] = useState("");

  // select bank modal function
  const [selectBank, setSelectBank] = useState(false);
  const SelectBankOpen = () => setSelectBank(true);
  const SelectBankClose = () => setSelectBank(false);

  // fund wallet modal function
  const [fund, setFund] = useState(false);
  const FundOpen = () => setFund(true);
  const FundClose = () => setFund(false);

  // airtime and data modal function
  const [airtime, setAirtime] = useState(false);
  const AirtimeOpen = () => setAirtime(true);
  const AirtimeClose = () => setAirtime(false);

  // withdraw funds modal function
  const [withdraw, setWithdraw] = useState(false);
  const WithdrawOpen = () => setWithdraw(true);
  const WithdrawClose = () => setWithdraw(false);

  // cable modal function
  const [cable, setCable] = useState(false);
  const CableOpen = () => setCable(true);
  const CableClose = () => setCable(false);

  // Internet modal function
  const [internet, setInternet] = useState(false);
  const InternetOpen = () => setInternet(true);
  const InternetClose = () => setInternet(false);

  // Electricity modal function
  const [electricity, setElectricity] = useState(false);
  const ElectricityOpen = () => setElectricity(true);
  const ElectricityClose = () => setElectricity(false);

  // Fund with card modal function
  const [fundWithCard, setFundWithCard] = useState(false);
  // const FundWithCardOpen = () => setFundWithCard(true);
  const FundWithCardClose = () => setFundWithCard(false);

  // Bank Transfer modal function
  const [Transfer, setTransfer] = useState(false);
  // const TransferOpen = () => setTransfer(true);
  const TransferClose = () => setTransfer(false);

  // PIN modal function
  const [pin, setPin] = useState(false);
  const PinOpen = () => setPin(true);
  const PinClose = () => setPin(false);

  // Success modal function
  const [success, setSucess] = useState(false);
  const SucessOpen = () => setSucess(true);
  const SucessClose = () => setSucess(false);

  // Handle bank transfer secondary modal
  const HandleTransferOpen = () => {
    setFund(false);
    setTransfer(true);
  };

  // Handle fund with card secondary modal
  const HandleFundWithCardOpen = () => {
    setFund(false);
    setFundWithCard(true);
  };

  // Handle success secondary modal
  const HandleSucessOpen = () => {
    // setSelectBank(false);
    setPin(false);
    setSucess(true);
  };

  const HandleInputPinOpen = () => {
    setSelectBank(false);
    setPin(true);
  };

  const HandleSucessClose = () => {
    setSucess(false);
    setWithdraw(false);
  };

  useEffect(() => {
    const getWalletBalance = async () => {
      try {
        const response = await axios.get("/api/wallet/get-balance", {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        });
        setWalletBalance(response.data.data.accountBalance);
        setSavingsBalance(response.data.data.totalSavingsPlan);
        setInvestmentBalance(response.data.data.ledgerBalance);
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
      }
    };

    getWalletBalance();
  }, []);

  // const handleClick = () => setShow(!show);

  return (
    <DashboardContainer PageTItle="Dashboard">
      <DashboardBalanceCard
        walletBalance={walletBalance}
        savingsBalance={savingsBalance}
        investmentBalance={investmentBalance}
        show={show}
        handleClick={handleClick}
        FundOpen={() => {
          setFund(true);
        }}
        WithdrawOpen={() => {
          setWithdraw(true);
        }}
      />
      <div className="mt-3 py-2 flex items-center justify-between">
        <DashboardActions
          AirtimeOpen={() => {
            setAirtime(true);
          }}
          CableOpen={() => {
            setCable(true);
          }}
          InternetOpen={() => {
            setInternet(true);
          }}
          ElectricityOpen={() => {
            setElectricity(true);
          }}
        />
        <DashboardInvestments />
      </div>
      <div className="flex items-center justify-between mt-2">
        <DashboardSavings />
        <TransactionsCard />
      </div>

      {/* modal contents */}
      {/* fund wallet modal*/}
      <CustomModal
        ModalStyling=""
        isOpen={fund}
        modalTitle="Fund wallet"
        onClose={FundClose}
      >
        <FundWallet
          TransferOpen={HandleTransferOpen}
          CardOpen={HandleFundWithCardOpen}
        />
      </CustomModal>
      <CustomModal
        ModalStyling=""
        isOpen={Transfer}
        modalTitle="Bank Transfer"
        onClose={TransferClose}
      >
        <BankTransfer />
      </CustomModal>
      <CustomModal
        ModalStyling=""
        isOpen={fundWithCard}
        modalTitle="Fund with Card"
        onClose={FundWithCardClose}
      >
        <FundWithCard />
      </CustomModal>

      {/* withdraw modal*/}
      <CustomModal
        ModalStyling=""
        isOpen={withdraw}
        modalTitle="Enter withdrawal amount"
        onClose={WithdrawClose}
      >
        <Withdrawal accountBalance={walletBalance} />
      </CustomModal>

      {/* airtime and data modal */}
      <CustomModal
        ModalStyling="pad_0"
        isOpen={airtime}
        modalTitle="Airtime & Data"
        onClose={AirtimeClose}
      >
        <AirtimeAndData />
      </CustomModal>

      {/* cable TV modal */}
      <CustomModal
        ModalStyling=""
        isOpen={cable}
        modalTitle="Cable TV"
        onClose={CableClose}
      >
        <CableTV />
      </CustomModal>

      {/* Internet modal */}
      <CustomModal
        ModalStyling=""
        isOpen={internet}
        modalTitle="Internet"
        onClose={InternetClose}
      >
        <Internet />
      </CustomModal>

      {/* Electricity modal */}
      <CustomModal
        ModalStyling=""
        isOpen={electricity}
        modalTitle="Electricity"
        onClose={ElectricityClose}
      >
        <Electricity />
      </CustomModal>
    </DashboardContainer>
  );
};

export default Page;
