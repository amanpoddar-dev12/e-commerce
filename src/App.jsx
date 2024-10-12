import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="dark:bg-slate-900">
      <Home />
    </div>
  );
}

export default App;
