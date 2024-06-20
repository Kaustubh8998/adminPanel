import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../index.css"; // Ensure to import the custom CSS file
// import "/assets/tick.svg"

const steps = [
  { number: 1, label: "Select Products" },
  { number: 2, label: "Address Info" },
  { number: 3, label: "Payment Info" },
  { number: 4, label: "Order Successful" },
];

const Stepper = ({ currentStep }) => {
  return (
    <div className="relative flex justify-between items-center w-full max-w-2xl mx-auto">
      {steps.map((step, index) => (
        <>
          <div className="relative flex flex-col items-center z-10 step-item">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                index < currentStep
                  ? "bg-teal-500 text-white"
                  : "border-2 border-gray-300 text-gray-400"
              }`}
            >
              {index < currentStep ? (
                <i>
                  <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.57801 9.642L15.22 0L16.5003 1.28025L5.57801 12.2025L0.499756 7.12575L1.78001 5.8455L5.57801 9.642Z"
                      fill="white"
                    />
                  </svg>
                </i>
              ) : (
                step.number
              )}
            </div>
            <p
              className={`mt-2 text-sm ${
                index < currentStep ? "text-teal-500" : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="relative flex-1 flex justify-center top-2 items-center">
              <div
                className={`absolute flex justify-center -top-5 -left-5 -right-5 h-[3px] ${
                  index < currentStep - 1 ? "bg-teal-500" : "bg-slate-200"
                }`}
              ></div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Stepper;
