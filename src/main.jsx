import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./productcontext/ProductContext.jsx";
import { FilterContextProvider } from "./productcontext/Filter_context.jsx";
import { CartProvider } from "./productcontext/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH_DOMAIN;
const clientID = import.meta.env.VITE_APP_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
