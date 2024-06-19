import React from "react";
import product from "/assets/product.png";

const ProductCard = () => {
  return (
    <div className="w-[200px] h-[239px] flex flex-col rounded-[26px] border border-gray-200 shadow-md px-4 relative">
      <div className="flex justify-centerw-[4.5rem] h-[7.3rem] mt-4">
        <img
          className="w-full h-full object-contain mb-4"
          src={product}
          alt="product"
        />
      </div>

      <h5 className="text-[14.72px] font-medium text-gray-900 mb-2 mt-4">
        Zinga vita Vitamin Amla Extract 1000mg Tablet
      </h5>
      <div className="flex gap-2">
        <p className="text-[16.82px] font-bold text-gray-900 mb-2">₹366</p>
        <p className="text-[16.82px] text-gray-400 line-through mb-2">₹999</p>
      </div>

      <button className="absolute -top-4 -right-4 bg-red-100 rounded-full p-2 cursor-pointer">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 9C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10C25 10.2652 24.8946 10.5196 24.7071 10.7071C24.5196 10.8946 24.2652 11 24 11H23L22.997 11.071L22.064 24.142C22.0281 24.6466 21.8023 25.1188 21.4321 25.4636C21.0619 25.8083 20.5749 26 20.069 26H11.93C11.4241 26 10.9371 25.8083 10.5669 25.4636C10.1967 25.1188 9.97092 24.6466 9.935 24.142L9.002 11.072C9.00048 11.048 8.99982 11.024 9 11H8C7.73478 11 7.48043 10.8946 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9H24ZM18 6C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7C19 7.26522 18.8946 7.51957 18.7071 7.70711C18.5196 7.89464 18.2652 8 18 8H14C13.7348 8 13.4804 7.89464 13.2929 7.70711C13.1054 7.51957 13 7.26522 13 7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H18Z"
            fill="#F22222"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
