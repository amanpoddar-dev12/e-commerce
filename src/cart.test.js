import { render, screen } from "@testing-library/react";

// import Cart from "./pages/Cart";
import CartItem from "./components/CartItem";

test("renders cart product ", () => {
  render(<CartItem />);
  const linkElemnt = screen.getByText("Your cart is empty");
  expect(linkElemnt).toBeInTheDocument();
});
