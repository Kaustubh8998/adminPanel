import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import AdminOrders from "./pages/AdminOrders";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/bg-image.png')] bg-cover ">
        <AdminOrders />
      </div>
    </>
  );
}

export default App;
