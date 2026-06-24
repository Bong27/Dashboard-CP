import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/routes.tsx";
import { BankProvider } from "./app/context/BankContext.tsx";
import { TransactionProvider } from "./app/context/TransactionContext.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BankProvider>
    <TransactionProvider>
      <RouterProvider router={router} />
    </TransactionProvider>
  </BankProvider>
);
