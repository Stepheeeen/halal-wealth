import React from "react";

interface ProgressBarProps {
  progress: number;
  target: number;
  CustomStyle: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, target, CustomStyle }) => {
  const percentage = (progress / target) * 100;

  return (
    <div className={`w-full ${CustomStyle}`}>
      <div className="relative h-2 rounded-full bg-[#E6DAFC]">
        <div
          className="absolute h-full bg-[#8046F2] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-700 font-[450] mt-1">
        {percentage}% achieved of your ₦{target.toLocaleString()} target
      </p>
    </div>
  );
};

export default ProgressBar;
