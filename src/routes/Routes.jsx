import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TV from "../pages/TV";
import Favourite from "../pages/Favourite";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import App from "../App";
import { getUser } from "../lib/utils/getUser";
import { ProtectedRoutes } from "../components/layout/ProtectedRoutes";
import { AuthRoutes } from "../components/layout/AuthRoutes";

export const CustomRoutes = () => {
  const user = getUser();
  return (
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
  );
};
