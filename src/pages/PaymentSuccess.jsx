import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import paymentSuccess from "/assets/paymentSuccess.png";
import Stepper from "../components/Stepper";

const PaymentSuccess = () => {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <>
      <div className="flex">
        <div className="flex-1 flex-col">
          <div className="pl-8 pr-12">
            <div className="bg-white flex flex-col rounded-3xl h-[48.5rem] w-full">
              <div className="pt-4 pl-6 pb-8 pr-8">
                <h2 className="text-[18px] text-[#15A9A0] pb-[1.25rem] border-b-[1px]">
                  Order For Someone
                </h2>
                {/* <div className="flex items-center justify-between space-x-2 mt-10 px-[18.375rem]">
                  <div className="flex flex-col items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-500 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="text-teal-500 pt-2 text-center">
                      <p>
                        Select <br /> Products
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-500 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="text-teal-500 pt-2 text-center">
                      <p>
                        Address <br /> Info
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-500 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="text-teal-500 pt-2 text-center">
                      <p>
                        Payment <br /> Info
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 border-[1px] border-gray-500 rounded-full text-gray-500">
                      04
                    </div>
                    <div className="text-gray-500 pt-2 text-center">
                      <p>
                        Order <br /> Successful
                      </p>
                    </div>
                  </div>
                </div> */}
                <Stepper currentStep={currentStep} />
                <div className="pt-16 flex flex-col justify-center items-center">
                  <div className="w-1/5">
                    <img src={paymentSuccess} alt="" />
                  </div>
                  <p className="text-[36px] text-teal-500 mt-[3.688rem]">
                    Payment Successful !!
                  </p>
                  <div className="w-full justify-center flex mt-24">
                    <Link
                      className="bg-[#15A9A0] text-white px-[2.18rem] py-[0.75rem] rounded-full"
                      to={"/admin/ordersuccess"}
                    >
                      Next
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
