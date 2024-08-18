import React, { useState } from 'react';

const SelectFrequency: React.FC = () => {
  const [selected, setSelected] = useState('Just this once');

  const options = ['Daily', 'Weekly', 'Monthly', 'Just this once'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          How often do you want to save?
        </h2>
        <div className="flex justify-center space-x-4">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => setSelected(option)}
              className={`px-4 py-2 border rounded-full cursor-pointer text-gray-800 transition duration-300 ${
                selected === option
                  ? 'bg-purple-100 border-purple-400 text-purple-600'
                  : 'bg-white border-gray-200'
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectFrequency;
