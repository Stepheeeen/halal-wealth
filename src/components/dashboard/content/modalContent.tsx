"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  CustomButton,
  DefaultButton,
} from "@/components/reusable/button/Button";
import Link from "next/link";
import ClipboardJS from "clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BankIcon,
  BankIconLg,
  CardIcon,
  CopyIcon,
  NairaIcon,
  NumberIcon,
  PurpleFundWalletIcon,
  WalletIcon,
} from "../../../../public/assets/icons";
import { DefaultInput, IconInput } from "@/components/reusable/input/Input";
import { CustomModal } from "@/components/reusable/modal/modal";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import Select from "../../reusable/input/MuiSelect";
import axios from "axios";
import TransactionPinModal from "@/components/reusable/modal/TransactionPin";
import { userInfo } from "@/app/constants";
import { useRouter } from "next/router";

export const FundWallet = ({
  TransferOpen,
  CardOpen,
}: {
  TransferOpen: any;
  CardOpen: any;
}) => {
  return (
    <div className="">
      <p className="font-[450] ml-[2px] mt-1">
        Select how you want to fund your wallet
      </p>
      <div className="w-full">
        <CustomButton
          ButtonStyling=""
          Context={
            <div className="ml-[-55%]">
              <BankIcon />
            </div>
          }
          childDiv="ml-3"
          customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5"
          icon={""}
          onClick={TransferOpen}
          text="Bank Transfer"
          title=""
          type=""
        />
        <CustomButton
          ButtonStyling=""
          Context={
            <div className="ml-[-75%]">
              <CardIcon />
            </div>
          }
          childDiv="ml-3"
          customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]"
          icon={""}
          onClick={CardOpen}
          text="Card"
          title=""
          type=""
        />
      </div>
    </div>
  );
};

export const BankTransfer = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current);

      clipboard.on("success", () => {
        toast.success("Copied to clipboard!");
      });

      clipboard.on("error", () => {
        toast.error("Failed to copy.");
      });

      return () => {
        clipboard.destroy();
      };
    }
  }, []);

  return (
    <div className="w-full grid place-items-center h-[50%]">
      <div className="w-full grid place-items-center mt-5">
        <BankIconLg />
        <h1 className="font-[600] my-3">Via bank transfer</h1>
        <p className="text-[14px] font-[450] text-[#5C556C] text-center w-[95%]">
          Money transfers sent to this bank account number will automatically
          fund your Halal wealth.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-center mt-6">
          <h1
            id="accountNumber"
            className="mr-2 text-[#8046F2] text-[27px] font-[500]"
          >
            {userInfo.virtualAccountNumber}
          </h1>
          <button
            ref={buttonRef}
            data-clipboard-text="7238290200"
            className="p-2 ml-[-10px]"
            aria-label="Copy Account Number"
          >
            <CopyIcon />
          </button>
        </div>
        <p className="font-[550] text-[14px] mt-[3px] text-center">
          <span className="text-[#8046F2]">Halal Wealth</span>/
          {userInfo.virtualAccountName}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export const FundWithCard = () => {
  return (
    <div className="">
      <p className="font-[450] ml-[2px] mt-1">
        Select a card to fund your wallet with
      </p>
      <div className="w-full">
        <CustomButton
          ButtonStyling="w-[96%] flex items-center justify-between text-start"
          Context={
            <div className="ml-[-7px] mr-[3px]">
              <CardIcon />
            </div>
          }
          childDiv="ml-3 savingsDiv custom"
          customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded my-5"
          icon={""}
          onClick={""}
          text="02/26"
          title="....3100 Guaranty trust bank"
          type=""
        />
        <CustomButton
          ButtonStyling="w-[96%] flex items-center justify-between text-start"
          Context={
            <div className="ml-[-7px] mr-[3px]">
              <CardIcon />
            </div>
          }
          childDiv="ml-3 savingsDiv custom"
          customStyle="font-[500] py-5 border bg-[#F9FAFB] border-[#F2F4F7] border-1 hover:border-[#D5C1FB] hover:bg-[#F5F1FE] rounded mt-[-10px]"
          icon={""}
          onClick={""}
          text="02/26"
          title="....3100 Guaranty trust bank"
          type=""
        />
      </div>

      <Button
        variant="solid"
        className={`px-3 py-2 rounded font-[470] text-[15.5px] text-[#8046F2] my-2 mb-5`}
      >
        Add new card{" "}
        <span>
          <PurpleFundWalletIcon />
        </span>
      </Button>

      <DefaultButton
        disabled={false}
        isLoading={false}
        type="solid"
        text="Continue"
        customStyle="bg-[#8046F2] text-white font-medium"
        onClick={() => {}}
      />
    </div>
  );
};
export const Withdrawal = ({ accountBalance }: { accountBalance: string }) => {
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const openPinModal = () => {
    if (userInfo.accountBalance <= amount) {
      toast.error("Insufficient Balance");
      setPinModalOpen(false);
    } else {
      setPinModalOpen(true);
    }
  };

  const closePinModal = () => {
    setPinModalOpen(false);
  };

  const handleSubmit = async (pin: string) => {
    setLoading(true); // Set loading to true when submitting
    try {
      const response = await axios.post(
        "/api/wallet/withdraw-fund",
        {
          account_number: accountNumber,
          amount: amount,
          reason: "",
          transactionPin: pin,
        },
        {
          headers: {
            Authorization: userInfo.token,
            anonymousId: "123456",
          },
        }
      );

      if (response.data.status === "2000") {
        toast.success(response.data.description);
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      toast.error("An error occurred while processing your request.");
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after processing
      setPinModalOpen(false);
    }
  };

  return (
    <div className="mt-[20px]">
      <DefaultInput
        name=""
        value={accountNumber}
        onChange={(e: any) => {
          setAccountNumber(e.target.value);
        }}
        size="lg"
        type="number"
        CustomStyle="bg-[#F9FAFB] mb-4"
        label="Account Number"
      />
      <IconInput
        name=""
        disabled={false}
        iconStyle=""
        placeholder="0"
        value={amount}
        onChange={(e: any) => setAmount(e.target.value)}
        size="lg"
        type="number"
        icon={<NairaIcon />}
        RighIcon={""}
        handleClick={""}
        CustomStyle="pl-[55px] bg-[#F9FAFB]"
        label="Amount"
      />
      <p className="text-[14px] font-[450] text-[#5C556C] text-center w-[95%] mt-2">
        +NGN 50 processing fee
      </p>
      <div className=" flex items-center justify-center w-[95%] text-[16px] mt-6">
        <WalletIcon />
        <p className=" text-[15px] font-[450] text-[#5C556C] ml-1">
          Wallet balance
        </p>
        <span className="w-[4px] h-[4px] rounded-full bg-[#14013A] mx-1"></span>
        <h1 className="text-[#17B26A] font-[570]">NGN {accountBalance}</h1>
      </div>
      <DefaultButton
        disabled={false}
        type="solid"
        text="Continue"
        isLoading={loading} // Pass loading state to DefaultButton
        customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
        onClick={openPinModal}
      />
      {/* Transaction Pin Modal */}
      <TransactionPinModal
        isOpen={pinModalOpen}
        onSubmit={handleSubmit}
        onClose={closePinModal}
      />
      <ToastContainer />
    </div>
  );
};

export const AirtimeAndData = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [network, setNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [dataAmount, setDataAmount] = useState("");
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [transactionPin, setTransactionPin] = useState("");
  const [dataPlans, setDataPlans] = useState<any[]>([]);
  const [selectedDataPlan, setSelectedDataPlan] = useState<any | null>(null);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleTabsChange = (index: number) => {
    setSelectedIndex(index);
    if (index === 1) {
      setSelectedDataPlan("");
      setDataAmount("");
    }
  };

  const selectBillers = [
    { value: "mtn", label: "MTN" },
    { value: "glo", label: "Glo" },
    { value: "airtel", label: "Airtel" },
    { value: "9mobile", label: "9Mobile" },
  ];

  const handleNetworkChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedNetwork = event.target.value;
    setNetwork(selectedNetwork);

    if (selectedIndex === 1) {
      await fetchDataPlans(selectedNetwork);
    }
  };

  const fetchDataPlans = async (network: string) => {
    try {
      const response = await axios.get(
        `/api/bills/data-plan?network=${network}`,
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      );

      const plans = response.data.data.data;

      if (Array.isArray(plans) && plans.length > 0) {
        setDataPlans(plans);
      } else {
        setDataPlans([]);
      }
    } catch (error) {
      toast.error("Error fetching data plans.");
    }
  };

  const openPinModal = () => {
    setPinModalOpen(true);
  };

  const closePinModal = () => {
    setPinModalOpen(false);
  };

  const handleSubmit = (pin: string) => {
    setTransactionPin(pin);
    setLoading(true); // Set loading to true when submitting
    if (selectedIndex === 0) {
      makeAirtimePurchase(pin);
    } else {
      makeDataPurchase(pin);
    }
  };

  const makeAirtimePurchase = async (pin: string) => {
    try {
      const response = await axios.post(
        "/api/bills/airtime",
        {
          amount,
          beneficiary: phoneNumber,
          network,
          transactionPin: pin,
          deviceId: "web",
        },
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      );
      if (response.data.status === "2000") {
        toast.success(response.data.description);
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      toast.error("Error processing airtime transaction.");
    } finally {
      setLoading(false); // Set loading to false after processing
      closePinModal();
    }
  };

  const makeDataPurchase = async (pin: string) => {
    try {
      const response = await axios.post(
        "/api/bills/data",
        {
          amount: selectedDataPlan,
          beneficiary: phoneNumber,
          network,
          transactionPin: pin,
          deviceId: "web",
          id: id,
        },
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      );
      if (response.data.status === "2000") {
        toast.success(response.data.description);
      } else {
        toast.error(response.data.description);
      }
    } catch (error) {
      toast.error("Error processing data transaction.");
    } finally {
      setLoading(false); // Set loading to false after processing
      closePinModal();
    }
  };

  return (
    <div className="w-full h-[100vh]">
      <Tabs className="w-full" onChange={handleTabsChange}>
        <TabList className="text-[14px] font-[450] text-[#5C5F84] pt-[20px] border-b-2 border-[#1018280D]">
          <Tab
            className={`w-1/2 pb-[10px] border-b-2 ${
              selectedIndex === 0
                ? "text-[#8046F2] border-[#8046F2]"
                : "border-white hover:text-black"
            }`}
          >
            AIRTIME
          </Tab>
          <Tab
            className={`w-1/2 pb-[10px] border-b-2 ${
              selectedIndex === 1
                ? "text-[#8046F2] border-[#8046F2]"
                : "border-white hover:text-black"
            }`}
          >
            DATA BUNDLES
          </Tab>
        </TabList>

        <TabPanels className="w-full p-3">
          <TabPanel className="font-[400] text-[16px]">
            <DefaultInput
              name=""
              value={phoneNumber}
              onChange={(e: any) => {
                setPhoneNumber(e.target.value);
              }}
              size="lg"
              type="number"
              CustomStyle="bg-[#F9FAFB] mb-4"
              label="Phone Number"
            />
            <label className="text-[14px] mt-2 font-[450] mb-2">
              Select Network
            </label>
            <select
              className="w-full p-3 bg-[#F9FAFB] mb-4 rounded border border-gray-300"
              value={network}
              onChange={handleNetworkChange}
            >
              <option value="" disabled>
                Select a network
              </option>
              {selectBillers.map((biller, index) => (
                <option key={index} value={biller.value}>
                  {biller.label}
                </option>
              ))}
            </select>

            <IconInput
              name=""
              disabled={false}
              iconStyle=""
              placeholder="0"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              size="lg"
              type="number"
              icon={<NairaIcon />}
              RighIcon={""}
              handleClick={""}
              CustomStyle="pl-[55px] bg-[#F9FAFB]"
              label="Amount"
            />
            <DefaultButton
              disabled={false}
              type="solid"
              text="Continue"
              isLoading={loading} // Pass loading state to DefaultButton
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
              onClick={openPinModal}
            />
            <TransactionPinModal
              isOpen={pinModalOpen}
              onSubmit={handleSubmit}
              onClose={closePinModal}
            />
          </TabPanel>

          <TabPanel className="font-[400] text-[16px]">
            <DefaultInput
              name=""
              value={phoneNumber}
              onChange={(e: any) => {
                setPhoneNumber(e.target.value);
              }}
              size="lg"
              type="number"
              CustomStyle="bg-[#F9FAFB] mb-4"
              label="Phone Number"
            />
            <label className="text-[14px] font-[450] mb-2">
              Select Network
            </label>
            <select
              className="w-full mb-4 p-3 bg-[#F9FAFB] rounded border border-gray-300"
              value={network}
              onChange={handleNetworkChange}
            >
              <option value="" disabled>
                Select a network
              </option>
              {selectBillers.map((biller, index) => (
                <option key={index} value={biller.value}>
                  {biller.label}
                </option>
              ))}
            </select>

            <label className="text-[14px] font-[450] mb-2">
              Select Data Plan
            </label>
            <select
              className="w-full mb-4 p-3 bg-[#F9FAFB] rounded border border-gray-300"
              value={selectedDataPlan}
              onChange={(e: any) => setSelectedDataPlan(e.target.value)}
            >
              <option value="" disabled>
                Select a data plan
              </option>
              {dataPlans.map((plan) => (
                <option key={plan.id} value={plan.price}>
                  {plan.name} - {plan.price}
                </option>
              ))}
            </select>

            <DefaultButton
              disabled={false}
              type="solid"
              text="Continue"
              isLoading={loading} // Pass isLoading state to DefaultButton
              customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-14"
              onClick={openPinModal}
            />
            <TransactionPinModal
              isOpen={pinModalOpen}
              onSubmit={handleSubmit}
              onClose={closePinModal}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
