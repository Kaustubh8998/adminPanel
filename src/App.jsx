import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AdminOrders from "./pages/AdminOrders";
import AddressInfo from "./pages/AddressInfo";
import PaymentSuccess from "./pages/PaymentSuccess";
import OrderSuccess from "./pages/OrderSuccess";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Router>
        <div className="flex relative justify-between h-[1221px] bg-[url('/assets/bg-image.png')] bg-cover">
          <SideBar />
          <div className="w-full bg-white bg-opacity-60 font-albert">
            <Header />
            <Routes>
              <Route path="/" element={<AdminOrders />} />
              <Route path="/admin/billing" element={<AddressInfo />} />
              <Route
                path="/admin/paymentsuccess"
                element={<PaymentSuccess />}
              />
              <Route path="/admin/ordersuccess" element={<OrderSuccess />} />
              <Route path="/admin/order" element={<Order />} />
            </Routes>
            <div className="flex w-full h-[7%] mt-[8.625rem] items-center justify-center bg-white">
              <div className="flex items-center justify-between px-[21rem] w-full">
                <button className="w-10 h-10 bg-[#FDFDFD]">&#60;</button>
                <p className="text-xl text-[#6B6B6B]">Page 1 of 8</p>
                <button className="w-10 h-10 bg-[#FDFDFD]">&#62;</button>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
