import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Favourite from "../../pages/Favourite";
import NotFound from "../../pages/404";
import MoviesDetail from "../../pages/Movies/Detail";
import MoviesLayout from "../../components/layout/MoviesLayout";
import Signup from "../../pages/Signup";
import { AuthRoutes } from "../../components/layout/AuthRoutes";

export const ROUTE_PATHS = {
  HOME: "/",
  MOVIES: "/movies",
  FAVORITES: "/favourite",
  LOGIN: "/login",
  SIGNUP: "/signup",
};
export const NAVIGATION_LINKS = [
  { title: "Home", url: ROUTE_PATHS.HOME },
  { title: "Movies", url: ROUTE_PATHS.MOVIES },
  { title: "Favourite", url: ROUTE_PATHS.FAVORITES },
];

export const ROUTES_CONFIG = [
  {
    path: "login",
    element: (
      <AuthRoutes>
        <Login />
      </AuthRoutes>
    ),
    isProtected: false,
  },
  {
    path: "signup",
    element: (
      <AuthRoutes>
        <Signup />
      </AuthRoutes>
    ),
    isProtected: false,
  },
  {
    index: true,
    element: <Home />,
    isProtected: true,
  },
  {
    path: "movies",
    isProtected: true,
    element: <MoviesLayout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: ":id",
        element: <MoviesDetail />,
      },
    ],
  },
  {
    path: "favourite",
    element: <Favourite />,
    isProtected: true,
  },
  {
    path: "*",
    element: <NotFound />,
    isProtected: false,
  },
];

export const GENRES = [
  { title: "Action", url: "/genre/action" },
  { title: "Comedy", url: "/genre/comedy" },
  { title: "Drama", url: "/genre/drama" },
  { title: "Sci-Fi", url: "/genre/sci-fi" },
  { title: "Horror", url: "/genre/horror" },
];

export const LEGAL = [
  { title: "Terms of Service", url: "/terms" },
  { title: "Privacy Policy", url: "/privacy" },
  { title: "Cookie Policy", url: "/cookies" },
  { title: "FAQ", url: "/faq" },
  { title: "Help Center", url: "/help" },
];
