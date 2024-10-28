"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DefaultButton } from "@/components/reusable/button/Button";
 
import DashboardContainer from "@/components/dashboard/dashboardContainer";

interface Duration {
  id: number;
  amount: number;
}

const Page = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [durations, setDurations] = useState<Duration[]>([]);
  const router = useRouter();

  // Fetch durations from the API using axios
  useEffect(() => {
    async function fetchDurations() {
      try {
        const response = await axios.get("/api/savings/get-duration");
        const data = response.data;

        // Check if data.durations is defined and is an array
        if (data?.durations && Array.isArray(data.durations)) {
          setDurations(data.durations);

          // Default select the first duration if available
          if (data.durations.length > 0) {
            setSelected(data.durations[0].amount);
          }
        } else {
          console.error("Durations data is undefined or not an array");
        }
      } catch (error) {
        console.error("Error fetching durations:", error);
      }
    }
    fetchDurations();
  }, []);

  function saveObject(key: string, newObject: Record<string, any>) {
    const existingDataString = localStorage.getItem(key);
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : {}; // Parse only if it's not null
    const updatedData = { ...existingData, ...newObject };
    localStorage.setItem(key, JSON.stringify(updatedData));
  }

  const handleOpen = () => {
    if (selected !== null) {
      saveObject("newSavings", { duration: selected });
      router.push("/dashboard/savings/frequency");
    }
  };

  return (
        <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">

      <div
        onClick={() => router.back()}
        className="flex items-center mt-2 ml-2"
      >
        <span className="font-medium ml-1">Back</span>
      </div>

      <div className="w-[95%] flex items-start justify-between p-4">
        <div className="w-1/2">
          <h1 className="text-[54px] font-[480] text-wrap">
            Review Savings plan details
          </h1>
        </div>

        <div className="ml-3 w-1/2 p-3">
          <div className="px-2 rounded font-[500]">
            <div className="w-full p-4">
              {durations && durations.length > 0 ? (
                durations.map((duration: any) => (
                  <div
                    key={duration.id}
                    onClick={() => setSelected(duration.amount)}
                    className={`p-4 mb-4 border rounded-lg cursor-pointer ${
                      selected === duration.amount
                        ? "bg-[#F5F1FE] border-[#D5C1FB]"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{duration.amount} months</span>
                      <span
                        className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                          selected === duration.amount
                            ? "border-[#8046F2]"
                            : "border-gray-400"
                        }`}
                      >
                        {selected === duration.amount && (
                          <span className="w-2 h-2 bg-[#8046F2] rounded-full"></span>
                        )}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No durations available.</p> // Fallback if durations array is empty
              )}

              <DefaultButton
                type="solid"
                text="Continue"
                customStyle="bg-[#8046F2] text-white font-medium h-[45px] mt-5"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</DashboardContainer>

  );
};

export default Page;
