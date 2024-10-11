import { useContext, useEffect, useState } from "react";
// import UserThemeProvider from "./themeContext/theme";
import UserContext from "./themeContext/ThemeContext";
import ProductItem from "./components/ProductItem";
import { data } from "autoprefixer";

function App() {
  const { toggleDarkMode, darkMode } = useContext(UserContext);
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
      const data = await response.json();

      setProductData(data);
    };
    getProduct();
  }, []);
  useEffect(() => {
    console.log(productData);
  }, [productData]);
  return (
    <div className="min-h-screen dark:bg-slate-900 bg-white">
      <header className="p-4 bg-white dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold">
          Dark Mode in React with Tailwind CSS
        </h1>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      <main className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100">
        <p>This is a React app with dark mode applied globally.</p>
        <p>The whole page will switch between dark and light modes.</p>
      </main>

      <div className="flex flex-wrap dark:bg-slate-900 bg-white gap-10 ml-[45px] md:ml-[90px]">
        {productData?.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
