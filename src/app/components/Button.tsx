import React from "react";

interface Buttonprops {
  label: string;
  onClick: () => void;
  type?: "default" | "equal" | "clear";
}

export const Button: React.FC<Buttonprops> = ({
  label,
  onClick,
  type = "default",
}) => {
  const baseStyle =
    "p-4 text-xl rounded-md transition font-medium shadow-sm hover:shadow-md";
  const colorStyle =
    type === "equal"
      ? "bg-emerald-600 hover:bg-emerald-700"
      : type === "clear"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-gray-700 hover:bg-gray-600";

  return (
    <button onClick={onClick} className={`${baseStyle}${colorStyle}`}>
      {label}
    </button>
  );
};
