import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import NoProduct from "../assets/NoProduct.png";
import ProductCard from "../components/ProductCard";

const AdminOrders = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1 flex-col">
          <Header />
          <div className="pl-8 pr-12">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
