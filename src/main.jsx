import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import both providers
import { ToastProvider as CustomToastProvider } from "@/hooks/use-toast";
import { ToastProvider as RadixToastProvider } from "@/components/ui/toast"; // adjust the path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RadixToastProvider>
      <CustomToastProvider>
        <App />
      </CustomToastProvider>
    </RadixToastProvider>
  </StrictMode>
);
