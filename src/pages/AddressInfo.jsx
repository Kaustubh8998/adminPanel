import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Stepper from "../components/Stepper";

const AddressInfo = () => {
  const [currentStep, setCurrentStep] = useState(2);
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
                <div className="pt-16">
                  <h1 className="text-[24px] text-[#15A9A0] font-semibold">
                    Add Customer Information
                  </h1>
                  <form action="" className="flex gap-[4.375rem] pt-10">
                    <div className="flex flex-col">
                      <input
                        className="w-[25rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5"
                        type="text"
                        placeholder="Full Name (Required)*"
                        name=""
                        id=""
                      />
                      <input
                        className="w-[25rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5 mt-6"
                        type="text"
                        placeholder="Phone Number (Required)*"
                        name=""
                        id=""
                      />
                      <input
                        className="w-[25rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5 mt-6"
                        type="text"
                        placeholder="Zipcode (Required)*"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex gap-3">
                        <input
                          className="w-[12rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5"
                          type="text"
                          placeholder="State (Required)*"
                          name=""
                          id=""
                        />
                        <input
                          className="w-[12rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5"
                          type="text"
                          placeholder="City (Required)*"
                          name=""
                          id=""
                        />
                      </div>
                      <input
                        className="w-[32rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5 mt-6"
                        type="text"
                        placeholder="Full Address*"
                        name=""
                        id=""
                      />
                      <input
                        className="w-[32rem] bg-[#FBFBFB] py-[20px] rounded-xl pl-5 mt-6"
                        type="text"
                        placeholder="Unit number (only for apartments)"
                        name=""
                        id=""
                      />
                      <p className="pt-6 text-[#B0B4B6]">Type of adress</p>
                      <div className="pt-4">
                        <ul className=" flex w-full gap-3">
                          <li>
                            <input
                              type="radio"
                              id="home"
                              className="hidden"
                              required
                            />
                            <label for="home" className="">
                              <div className="flex gap-1 items-center rounded-xl bg-[#FBFBFB] p-3">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.33341 16.6667V11.6667H11.6667V16.6667H15.8334V10H18.3334L10.0001 2.5L1.66675 10H4.16675V16.6667H8.33341Z"
                                    fill="#B0B4B6"
                                  />
                                </svg>

                                <div className="w-full text=[12px] text-[#B0B4B6]">
                                  Home
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="home"
                              className="hidden"
                              required
                            />
                            <label for="home" className="">
                              <div className="flex gap-1 items-center rounded-xl bg-[#FBFBFB] p-3">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.5 3.125C2.5 2.62772 2.69754 2.15081 3.04917 1.79917C3.40081 1.44754 3.87772 1.25 4.375 1.25H11.7188C11.9855 1.25 12.2496 1.30254 12.4961 1.40462C12.7425 1.5067 12.9664 1.65632 13.1551 1.84494C13.3437 2.03356 13.4933 2.25748 13.5954 2.50392C13.6975 2.75037 13.75 3.0145 13.75 3.28125V8.125H15.4688C15.7355 8.125 15.9996 8.17754 16.2461 8.27962C16.4925 8.3817 16.7164 8.53132 16.9051 8.71994C17.0937 8.90856 17.2433 9.13248 17.3454 9.37892C17.4475 9.62537 17.5 9.8895 17.5 10.1562V18.125C17.5 18.2908 17.4342 18.4497 17.3169 18.5669C17.1997 18.6842 17.0408 18.75 16.875 18.75H14.375V15.9375C14.375 15.6889 14.2762 15.4504 14.1004 15.2746C13.9246 15.0988 13.6861 15 13.4375 15H6.5625C6.31386 15 6.0754 15.0988 5.89959 15.2746C5.72377 15.4504 5.625 15.6889 5.625 15.9375V18.75H3.125C2.95924 18.75 2.80027 18.6842 2.68306 18.5669C2.56585 18.4497 2.5 18.2908 2.5 18.125V3.125ZM13.125 16.25V18.75H10.625V16.25H13.125ZM9.375 16.25V18.75H6.875V16.25H9.375ZM7.5 5.3125C7.5 5.06386 7.40123 4.8254 7.22541 4.64959C7.0496 4.47377 6.81114 4.375 6.5625 4.375C6.31386 4.375 6.0754 4.47377 5.89959 4.64959C5.72377 4.8254 5.625 5.06386 5.625 5.3125C5.625 5.56114 5.72377 5.7996 5.89959 5.97541C6.0754 6.15123 6.31386 6.25 6.5625 6.25C6.81114 6.25 7.0496 6.15123 7.22541 5.97541C7.40123 5.7996 7.5 5.56114 7.5 5.3125ZM7.5 8.4375C7.5 8.18886 7.40123 7.9504 7.22541 7.77459C7.0496 7.59877 6.81114 7.5 6.5625 7.5C6.31386 7.5 6.0754 7.59877 5.89959 7.77459C5.72377 7.9504 5.625 8.18886 5.625 8.4375C5.625 8.68614 5.72377 8.9246 5.89959 9.10041C6.0754 9.27623 6.31386 9.375 6.5625 9.375C6.81114 9.375 7.0496 9.27623 7.22541 9.10041C7.40123 8.9246 7.5 8.68614 7.5 8.4375ZM6.5625 12.5C6.81114 12.5 7.0496 12.4012 7.22541 12.2254C7.40123 12.0496 7.5 11.8111 7.5 11.5625C7.5 11.3139 7.40123 11.0754 7.22541 10.8996C7.0496 10.7238 6.81114 10.625 6.5625 10.625C6.31386 10.625 6.0754 10.7238 5.89959 10.8996C5.72377 11.0754 5.625 11.3139 5.625 11.5625C5.625 11.8111 5.72377 12.0496 5.89959 12.2254C6.0754 12.4012 6.31386 12.5 6.5625 12.5ZM10.625 5.3125C10.625 5.06386 10.5262 4.8254 10.3504 4.64959C10.1746 4.47377 9.93614 4.375 9.6875 4.375C9.43886 4.375 9.2004 4.47377 9.02459 4.64959C8.84877 4.8254 8.75 5.06386 8.75 5.3125C8.75 5.56114 8.84877 5.7996 9.02459 5.97541C9.2004 6.15123 9.43886 6.25 9.6875 6.25C9.93614 6.25 10.1746 6.15123 10.3504 5.97541C10.5262 5.7996 10.625 5.56114 10.625 5.3125ZM9.6875 9.375C9.93614 9.375 10.1746 9.27623 10.3504 9.10041C10.5262 8.9246 10.625 8.68614 10.625 8.4375C10.625 8.18886 10.5262 7.9504 10.3504 7.77459C10.1746 7.59877 9.93614 7.5 9.6875 7.5C9.43886 7.5 9.2004 7.59877 9.02459 7.77459C8.84877 7.9504 8.75 8.18886 8.75 8.4375C8.75 8.68614 8.84877 8.9246 9.02459 9.10041C9.2004 9.27623 9.43886 9.375 9.6875 9.375ZM10.625 11.5625C10.625 11.3139 10.5262 11.0754 10.3504 10.8996C10.1746 10.7238 9.93614 10.625 9.6875 10.625C9.43886 10.625 9.2004 10.7238 9.02459 10.8996C8.84877 11.0754 8.75 11.3139 8.75 11.5625C8.75 11.8111 8.84877 12.0496 9.02459 12.2254C9.2004 12.4012 9.43886 12.5 9.6875 12.5C9.93614 12.5 10.1746 12.4012 10.3504 12.2254C10.5262 12.0496 10.625 11.8111 10.625 11.5625ZM12.8125 12.5C13.0611 12.5 13.2996 12.4012 13.4754 12.2254C13.6512 12.0496 13.75 11.8111 13.75 11.5625C13.75 11.3139 13.6512 11.0754 13.4754 10.8996C13.2996 10.7238 13.0611 10.625 12.8125 10.625C12.5639 10.625 12.3254 10.7238 12.1496 10.8996C11.9738 11.0754 11.875 11.3139 11.875 11.5625C11.875 11.8111 11.9738 12.0496 12.1496 12.2254C12.3254 12.4012 12.5639 12.5 12.8125 12.5Z"
                                    fill="#B0B4B6"
                                  />
                                </svg>

                                <div className="w-full text=[12px] text-[#B0B4B6]">
                                  Apartments
                                </div>
                              </div>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="home"
                              className="hidden"
                              required
                            />
                            <label for="home" className="">
                              <div className="flex gap-1 items-center rounded-xl bg-[#FBFBFB] p-3">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.33341 1.66663H11.6667C12.1088 1.66663 12.5327 1.84222 12.8453 2.15478C13.1578 2.46734 13.3334 2.89127 13.3334 3.33329V4.99996H16.6667C17.1088 4.99996 17.5327 5.17555 17.8453 5.48811C18.1578 5.80067 18.3334 6.2246 18.3334 6.66663V15.8333C18.3334 16.2753 18.1578 16.6992 17.8453 17.0118C17.5327 17.3244 17.1088 17.5 16.6667 17.5H3.33341C2.40841 17.5 1.66675 16.75 1.66675 15.8333V6.66663C1.66675 5.74163 2.40841 4.99996 3.33341 4.99996H6.66675V3.33329C6.66675 2.40829 7.40841 1.66663 8.33341 1.66663ZM11.6667 4.99996V3.33329H8.33341V4.99996H11.6667Z"
                                    fill="#B0B4B6"
                                  />
                                </svg>

                                <div className="w-full text=[12px] text-[#B0B4B6]">
                                  Work
                                </div>
                              </div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                  <div className="w-full justify-end flex">
                    <Link
                      className="bg-[#15A9A0] text-white px-[2.18rem] py-[0.75rem] rounded-full"
                      to={"/admin/paymentsuccess"}
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

export default AddressInfo;
