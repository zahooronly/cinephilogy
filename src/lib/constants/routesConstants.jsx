import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Favourite from "../../pages/Favourite";
import NotFound from "../../pages/404";
import MoviesDetail from "../../pages/Movies/Detail";
import MoviesLayout from "../../components/layout/MoviesLayout";

export const NAVIVATION_LINKS = [
  { title: "Home", url: "/" },
  { title: "Movies", url: "/movies" },
  { title: "Favourite", url: "/favourite" },
];

export const ROUTES_CONFIG = [
  {
    path: "login",
    element: <Login />,
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
