import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./productcontext/ProductContext.jsx";
import { FilterContextProvider } from "./productcontext/Filter_context.jsx";
import { CartProvider } from "./productcontext/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
