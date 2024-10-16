import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-wtdoy1d2xtj7git3.us.auth0.com"
    clientId="pT1kGzk6r1xmRUD8BU1omh0OZ17ECdJG"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>
);
