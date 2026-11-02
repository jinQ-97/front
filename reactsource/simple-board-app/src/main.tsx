import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 1c7146e8ca3d9371d48c7c2c89f7ee7acac5a8b0
import AuthProvider from "./common/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
);
