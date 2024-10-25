import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./productcontext/ProductContext.jsx";
import { FilterContextProvider } from "./productcontext/Filter_context.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </FilterContextProvider>
  </AppProvider>
);
