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
        <div className="h-[1221px] bg-[url('./assets/bg-image.png')] bg-cover ">
          <Routes>
            <Route path="/" element={<AdminOrders />} />
            <Route path="/admin/billing" element={<AddressInfo />} />
            <Route path="/admin/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/admin/ordersuccess" element={<OrderSuccess />} />
            <Route path="/admin/order" element={<Order />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
