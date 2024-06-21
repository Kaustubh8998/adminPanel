import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import orderSuccess from "/assets/orderSuccess.png";
import Stepper from "../components/Stepper";

const OrderSuccess = () => {
  const [currentStep, setCurrentStep] = useState(4);
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
                <div className="pt-16 flex flex-col justify-center items-center">
                  <div className="w-1/3">
                    <img src={orderSuccess} alt="" />
                  </div>
                  <p className="text-[36px] text-teal-500 mt-[3.688rem] font-semibold">
                    Order Placed !!
                  </p>
                  <div className="w-full justify-center flex mt-24">
                    <Link
                      className="bg-[#15A9A0] text-white px-[2.18rem] py-[0.75rem] rounded-full"
                      to={"/"}
                    >
                      View All Orders
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

export default OrderSuccess;
