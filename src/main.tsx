import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CoinsProvider } from "./context/CoinsContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoinsProvider>
      <App />
    </CoinsProvider>
  </StrictMode>
);
