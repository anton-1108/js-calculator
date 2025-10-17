import React from "react";

interface DisplayProps {
  value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <input
      type="text"
      value={value}
      readOnly
      className="w-64 h-12 mb-4 text-right text-green-400 text-2xl bg-gray-800 border border-gray-700 rounded-md px-3"
    />
  );
};
