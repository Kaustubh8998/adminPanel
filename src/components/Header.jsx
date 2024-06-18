import React from "react";
import adminProfile from "../assets/adminProfile.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex-1 flex-col pl-8 pr-12 pt-20">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[34px] font-semibold">Admin Order</h1>
          <div className="flex space-x-2 items-center">
            <div className="relative border flex items-center border-gray-300 rounded-[13px] bg-gradient-to-r from-white to-[#dffffd] w-[30rem]">
              <i className="pl-4 py-[1rem]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 28L20 20M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
              <input
                type="text"
                placeholder="Search"
                className="font-lg bg-transparent pl-5 focus:outline-none"
              />
            </div>

            <i className="pl-10">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5 35.0006L38.25 36C38.3545 36.1393 38.4181 36.3049 38.4337 36.4783C38.4493 36.6517 38.4164 36.826 38.3385 36.9818C38.2607 37.1375 38.141 37.2685 37.9929 37.36C37.8448 37.4515 37.6741 37.5 37.5 37.5H7.5C7.3259 37.5 7.15523 37.4515 7.00713 37.36C6.85903 37.2685 6.73934 37.1375 6.66147 36.9818C6.58361 36.826 6.55065 36.6517 6.56629 36.4783C6.58192 36.3049 6.64554 36.1393 6.75 36L7.5 35.0006V18.75C7.5 14.7718 9.08035 10.9564 11.8934 8.1434C14.7064 5.33035 18.5218 3.75 22.5 3.75C26.4782 3.75 30.2936 5.33035 33.1066 8.1434C35.9196 10.9564 37.5 14.7718 37.5 18.75V35.0006ZM17.8125 39.375H27.1875C27.1875 40.6182 26.6936 41.8105 25.8146 42.6896C24.9355 43.5686 23.7432 44.0625 22.5 44.0625C21.2568 44.0625 20.0645 43.5686 19.1854 42.6896C18.3064 41.8105 17.8125 40.6182 17.8125 39.375Z"
                  fill="#15A9A0"
                />
              </svg>
            </i>
            <div className="pl-16">
              <img
                src="./src/assets/adminProfile.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-[1.125rem] pb-6 border-b-[1px] border-black border-opacity-10">
          <button className="flex items-center bg-white px-5 py-2 rounded-full justify-around">
            <i>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z"
                  fill="#15A9A0"
                />
              </svg>
            </i>
            <p className="pl-[6px]">Order For Someone</p>
          </button>
          <div className="flex items-center ">
            <div className="bg-white flex items-center justify-center px-4 py-2 rounded-full">
              <input placeholder="Search Product" />
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>

            <button className="flex items-center bg-white px-5 py-2 rounded-full justify-around ml-7">
              <p className="pl-[6px]">Filter</p>
              <i className="pl-[0.536rem]">
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9.75C6 9.55109 6.07902 9.36032 6.21967 9.21967C6.36032 9.07902 6.55109 9 6.75 9H11.25C11.4489 9 11.6397 9.07902 11.7803 9.21967C11.921 9.36032 12 9.55109 12 9.75C12 9.94891 11.921 10.1397 11.7803 10.2803C11.6397 10.421 11.4489 10.5 11.25 10.5H6.75C6.55109 10.5 6.36032 10.421 6.21967 10.2803C6.07902 10.1397 6 9.94891 6 9.75ZM3 5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25C15 5.44891 14.921 5.63968 14.7803 5.78033C14.6397 5.92098 14.4489 6 14.25 6H3.75C3.55109 6 3.36032 5.92098 3.21967 5.78033C3.07902 5.63968 3 5.44891 3 5.25ZM0 0.75C0 0.551088 0.0790178 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 0 0.75 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75C18 0.948912 17.921 1.13968 17.7803 1.28033C17.6397 1.42098 17.4489 1.5 17.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790178 1.13968 0 0.948912 0 0.75Z"
                    fill="black"
                  />
                </svg>
              </i>
            </button>
            <button className="flex items-center bg-white px-5 py-2 rounded-full justify-around ml-3">
              <p className="pl-[6px]">Sort</p>
              <i className="pl-[0.536rem]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 20V10M8 20L5 17M8 20L11 17M16 4V14M16 4L19 7M16 4L13 7"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
