// components/dashboard/DashboardBalanceCard.jsx
import React from "react";
import { BalanceCard } from "@/components/reusable/card/Card";
import {
  FundWalletIcon,
  WithdrawIcon,
  HideIconWhite,
  ShowIconWhite,
} from "../../../public/assets/icons";

const DashboardBalanceCard = ({
  walletBalance,
  savingsBalance,
  investmentBalance,
  show,
  handleClick,
  FundOpen,
  WithdrawOpen,
}) => {
  return (
    <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-4">
      <div className="inline-flex space-x-4 bg-white">
        <BalanceCard
          customStyle="bg-[#4E05DC]"
          styleName="walletBg"
          CardTitle="Wallet Balance"
          hideBalance={handleClick}
          BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />}
          Balance={show ? `₦ ${walletBalance}` : "****"}
          handleClick1={FundOpen}
          handleClick2={WithdrawOpen}
          button1="Fund wallet"
          button2="Withdraw"
          buttonIcon1={<FundWalletIcon />}
          buttonIcon2={<WithdrawIcon />}
          styling1="bg-[#14013A]"
          styling2="bg-[#fff] text-[#8046F2]"
        />
        <BalanceCard
          customStyle="bg-[#14013A]"
          styleName=""
          CardTitle="Savings Balance"
          hideBalance={handleClick}
          BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />}
          Balance={show ? `₦ ${savingsBalance}` : "****"}
          handleClick1={""}
          handleClick2={""}
          button1="See Plans"
          button2="Create new plan"
          buttonIcon1={""}
          buttonIcon2={""}
          styling1="bg-[#fff] text-[#14013A]"
          styling2="bg-[#fff] text-[#14013A]"
        />
        <BalanceCard
          customStyle="bg-[#14013A]"
          styleName=""
          CardTitle="Investment Balance"
          hideBalance={handleClick}
          BalanceIcon={show ? <HideIconWhite /> : <ShowIconWhite />}
          Balance={show ? `₦ ${investmentBalance}` : "****"}
          handleClick1={""}
          handleClick2={""}
          button1="See Plans"
          button2="Create new plan"
          buttonIcon1={""}
          buttonIcon2={""}
          styling1="bg-[#fff] text-[#14013A]"
          styling2="bg-[#fff] text-[#14013A]"
        />
      </div>
    </div>
  );
};

export default DashboardBalanceCard;
