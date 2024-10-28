import React, { ReactNode, useEffect } from "react";
import DashboardContainer from "@/components/dashboard/dashboardContainer";
import { userInfo } from "@/app/constants";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const InvestContainer = ({ children }: { children: ReactNode }) => {
  // useEffect(() => {
  //   // Automatically reload the page when the component mounts
  //   window.location.reload();
  // }, []); // Empty dependency array ensures this runs only on mount

  return (
    <DashboardContainer PageTItle="Invest">
      <div className="w-full overflow-x-auto mt-2 whitespace-nowrap bg-white shadow-sm rounded-lg p-3">
        {children}
      </div>
    </DashboardContainer>
  );
};

export default InvestContainer;
