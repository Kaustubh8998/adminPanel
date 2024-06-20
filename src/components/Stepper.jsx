import React from "react";

const steps = [
  { number: `01`, label: "Select", label2: "Products" },
  { number: `02`, label: "Address", label2: "Info" },
  { number: `03`, label: "Payment", label2: "Info" },
  { number: `04`, label: "Order", label2: "Successful" },
];

const Stepper = ({ currentStep }) => {
  return (
    <div className="relative flex justify-between items-center w-full mt-[1.125rem] px-[21.25rem]">
      {steps.map((step, index) => (
        <>
          <div className="relative flex flex-col items-center z-10 step-item">
            <div
              className={`w-8 h-8 flex items-center justify-around rounded-full ${
                index < currentStep
                  ? "bg-teal-500 text-white"
                  : "border-2 bg-white border-gray-300 text-gray-400"
              }`}
            >
              <p className="text-[13px]">
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
              </p>
            </div>
            <p
              className={`mt-2 text-sm text-center ${
                index < currentStep ? "text-teal-500" : "text-gray-400"
              }`}
            >
              {step.label} <br /> {step.label2}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="relative flex-1 flex justify-center top-2 items-center">
              <div
                className={`absolute flex justify-center bottom-[1.85rem] -left-8 -right-9 h-[3px] ${
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
