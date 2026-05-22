import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ShoppingList } from "./components/ShoppingList";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingList />
  </StrictMode>,
);
