import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Stepper from "../components/Stepper";

const Order = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="flex">
        <div className="flex-1 flex-col">
          <div className="pl-8 pr-12">
            <div className="bg-white flex flex-col rounded-3xl h-[48.5rem] w-full">
              <div className="pt-4 pl-6 pb-8 pr-8">
                <h2 className="text-[18px] text-[#15A9A0] pb-[1.25rem] border-b-[1px] font-semibold">
                  Order For Someone
                </h2>
                <Stepper currentStep={currentStep} />
                <div className="flex flex-col h-full">
                  <div className="flex justify-between w-full pt-14">
                    <h2 className="text-[#15A9A0] text-[24px] font-semibold">
                      Select Products
                    </h2>
                    <div className="flex items-center justify-between w-[24rem] px-[1.25rem] py-2 rounded-full bg-[#15A9A01A]">
                      <input
                        className="focus:outline-none bg-transparent placeholder-[#15A9A0]"
                        placeholder="Search Product"
                      />
                      <i>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z"
                            stroke="#15A9A0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div className="flex flex-col pt-[1.625rem]">
                    <div className="flex gap-4 justify-start">
                      {/* <img
            className="w-[290px]"
            src={NoProduct}
            alt="No Products"
          />
          <h2 className="text-[28px] opacity-60">
            Search Products to select them
          </h2> */}
                      <ProductCard />

                      <ProductCard />
                      <ProductCard />
                    </div>
                  </div>
                  <div className="w-full justify-end flex mt-32">
                    <Link
                      to={"/admin/billing"}
                      className="bg-[#15A9A0] text-white px-[2.18rem] py-[0.75rem] rounded-full"
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

export default Order;
