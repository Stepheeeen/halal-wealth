import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ChildCard, CustomCard } from "../reusable/card/Card";
import noTransaction from "../../../public/assets/images/noTransaction.png"; 
import { userInfo } from "@/app/constants";

interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
}

const TransactionsCard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch transaction history
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("/api/wallet/transaction-history",
            {headers:{
                Authorization: `${userInfo.token}`
            }}
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <ChildCard CardTitle="" cardStyle="w-[49%] h-[455px]">
      <CustomCard>
        <div className="flex items-center justify-between px-2">
          <h1 className="text-[#5C556C] font-[500] text-[16px]">
            Transactions
          </h1>

          {/* <Link href="/wallet/transaction-history" className="text-[#8046F2] flex items-center font-[400]">
            See all
          </Link> */}
        </div>

        <div className="w-full h-[420px] flex flex-col justify-center items-center">
          {loading ? (
            <p>Loading transactions...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : transactions.length > 0 ? (
            <div className="w-full px-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <div className="text-[#5C556C] font-[400] text-[14px]">
                    {transaction.description}
                  </div>
                  <div className="text-[#8046F2] font-[400] text-[14px]">
                    ${transaction.amount.toFixed(2)}
                  </div>
                  <div className="text-[#5C556C] font-[400] text-[12px]">
                    {new Date(transaction.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Image alt="No transactions" src={noTransaction} className="w-[200px]" />
              {/* <p className="text-[#5C556C] font-[400] mt-4">No transactions available</p> */}
            </div>
          )}
        </div>
      </CustomCard>
    </ChildCard>
  );
};

export default TransactionsCard;