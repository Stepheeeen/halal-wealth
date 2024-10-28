// pages/dashboard.jsx
"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardContainer from "@/components/dashboard/dashboardContainer";
import DashboardBalanceCard from "@/components/dashboard/DashboardBalanceCard";
import DashboardActions from "@/components/dashboard/DashboardActions";
import DashboardInvestments from "@/components/dashboard/DashboardInvestments";
import DashboardSavings from "@/components/dashboard/DashboardSavings";
import TransactionsCard from "@/components/dashboard/TransactionCard";
import { userInfo } from "@/app/constants";

const Page = () => {
  const [walletBalance, setWalletBalance] = useState("");
  const [savingsBalance, setSavingsBalance] = useState("");
  const [investmentBalance, setInvestmentBalance] = useState("");
  const [show, setShow] = useState(false);

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

  const handleClick = () => setShow(!show);

  return (
    <DashboardContainer PageTItle="Dashboard">
      <DashboardBalanceCard
        walletBalance={walletBalance}
        savingsBalance={savingsBalance}
        investmentBalance={investmentBalance}
        show={show}
        handleClick={handleClick}
        FundOpen={() => {}}
        WithdrawOpen={() => {}}
      />
      <div className="mt-3 py-2 flex items-center justify-between">
        <DashboardActions 
          AirtimeOpen={() => {}}
          CableOpen={() => {}}
          InternetOpen={() => {}}
          ElectricityOpen={() => {}}
        />
        <DashboardInvestments />
      </div>
      <div className="flex items-center justify-between mt-2">
        <DashboardSavings />
        <TransactionsCard />
      </div>
    </DashboardContainer>
  );
};

export default Page;