import { Routes, Route } from "react-router";
import { getUser } from "../lib/utils/getUser";
import { ProtectedRoutes } from "../components/layout/ProtectedRoutes";
import { AuthRoutes } from "../components/layout/AuthRoutes";
import Login from "../pages/Login";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Favourite from "../pages/Favourite";
import NotFound from "../pages/404";
import MoviesDetail from "../pages/Movies/Detail";

export const CustomRoutes = () => {
  const user = getUser();

  return (
    <Routes>
      <Route element={<AuthRoutes isAuthenticated={user} />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/" element={<App />}>
        <Route element={<ProtectedRoutes isAuthenticated={user} />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviesDetail />} />
          <Route path="favourite" element={<Favourite />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
