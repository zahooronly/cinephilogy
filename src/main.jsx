import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Favourite from "./pages/Favourite";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import { getUser } from "./lib/utils/getUser.js";
import { ProtectedRoutes } from "./components/layout/ProtectedRoutes.jsx";
import { AuthRoutes } from "./components/layout/AuthRoutes.jsx";
const user = getUser();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes isAuthenticated={user}>
              <App />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv" element={<TV />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthRoutes isAuthenticated={user}>
              <Login />
            </AuthRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
