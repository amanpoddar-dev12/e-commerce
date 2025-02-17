import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function Pagelayout() {
  return (
    <div className="dark:bg-slate-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Pagelayout;
