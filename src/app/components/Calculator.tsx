"use client";
import React, { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");

  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "/",
    "C",
    "=",
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Next.js + TypeScript Calculator
      </h1>
      <Display value={display} />
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => {
          if (btn === "=")
            return (
              <Button key={btn} label={btn} onClick={calculate} type="equal" />
            );
          if (btn === "C")
            return (
              <Button
                key={btn}
                label={btn}
                onClick={clearDisplay}
                type="clear"
              />
            );
          return (
            <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
          );
        })}
      </div>
    </div>
  );
};
