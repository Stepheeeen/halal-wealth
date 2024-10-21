import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { userInfo } from "@/app/constants";

// Define the context interface
interface BalanceContextType {
  walletBalance: string;
  savingsBalance: string;
  investmentBalance: string;
}

// Create the context with default values
const BalanceContext = createContext<BalanceContextType>({
  walletBalance: "",
  savingsBalance: "",
  investmentBalance: "",
});

// Provider component
export const BalanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState<string>("");
  const [savingsBalance, setSavingsBalance] = useState<string>("");
  const [investmentBalance, setInvestmentBalance] = useState<string>("");

  useEffect(() => {
    const getWalletBalance = async () => {
      try {
        const response = await axios.get("/api/wallet/get-balance", {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
        console.log(response.data.data)
        const accountBalance = response.data.data.accountBalance
        const totalSavingsPlan = response.data.data.totalSavingsPlan
        const ledgerBalance = response.data.data.ledgerBalance

        setWalletBalance(accountBalance);
        setSavingsBalance(totalSavingsPlan);
        setInvestmentBalance(ledgerBalance);
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
      }
    };

    getWalletBalance();
  }, []);

  return (
    <BalanceContext.Provider value={{ walletBalance, savingsBalance, investmentBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

// Export the custom hook
export const useBalance = () => useContext(BalanceContext);