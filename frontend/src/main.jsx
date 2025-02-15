import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import AuthProvider from "./hooks/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <div className="bg-black min-h-screen text-white">
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              <App />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  </div>
);
