import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Table from "../components/Table";
import { Link, useNavigate } from "react-router-dom";
import NoProduct from "/assets/NoProduct.png";
import ProductCard from "../components/ProductCard";

const AdminOrders = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="pl-8 pr-12">
          <button
            onClick={() => navigate("/admin/order")}
            className="flex items-center absolute top-[10rem] bg-white px-5 py-2 rounded-full justify-around "
          >
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
          <Table />
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
