import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="dark:bg-slate-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
