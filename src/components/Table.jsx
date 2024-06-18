import React from "react";

const Table = () => {
  const data = [
    {
      status: "New-Order",
      orderId: "#11232",
      date: "Jun 29, 2022",
      customerName: "Afaq Karim",
      product: "Oxitocin 25mg",
      amount: "₹400.00",
    },
    {
      status: "New-Order",
      orderId: "#11232",
      date: "Jun 29, 2022",
      customerName: "Afaq Karim",
      product: "Oxitocin 25mg",
      amount: "₹400.00",
    },
    {
      status: "New-Order",
      orderId: "#11232",
      date: "Jun 29, 2022",
      customerName: "Afaq Karim",
      product: "Oxitocin 25mg",
      amount: "₹400.00",
    },
    {
      status: "New-Order",
      orderId: "#11232",
      date: "Jun 29, 2022",
      customerName: "Afaq Karim",
      product: "Oxitocin 25mg",
      amount: "₹400.00",
    },
    {
      status: "New-Order",
      orderId: "#11232",
      date: "Jun 29, 2022",
      customerName: "Afaq Karim",
      product: "Oxitocin 25mg",
      amount: "₹400.00",
    },

    // Add more data objects here as needed
  ];

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold py-4 border-b-[1px] border-black border-opacity-10">
        Past Orders
      </h2>
      <table className="w-full bg-[#dffffd] mt-[1.125rem]">
        <thead>
          <tr className="bg-[#A4EAE5]">
            <th className="py-2 pl-3 text-center">Status</th>
            <th className="py-2 px-3 text-center">Order ID</th>
            <th className="py-2 px-3 text-center">Date</th>
            <th className="py-2 px-3 text-center">Customer name</th>
            <th className="py-2 px-3 text-center">Product</th>
            <th className="py-2 px-3 text-center">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-3 text-center">
                <span className="bg-[rgb(94,253,139)] text-[#444444] rounded-full px-3 py-1 text-sm">
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-3 text-center">{item.orderId}</td>
              <td className="py-2 px-3 text-center">{item.date}</td>
              <td className="py-2 px-3 text-center">{item.customerName}</td>
              <td className="py-2 px-3 text-center">{item.product}</td>
              <td className="py-2 px-3 text-center">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
