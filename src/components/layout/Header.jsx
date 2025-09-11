import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Button } from "../ui/Button";
import { useLogout } from "../../hooks/useLogout";
import { NAVIVATION_LINKS } from "../../lib/constants/routesConstants";
import { useAuth } from "../../hooks/useAuthHooks";

export const Header = () => {
  const logout = useLogout();
  const user = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black px-4 md:px-8 py-4 flex items-center justify-between fixed w-full top-0 z-50">
      <Link to="/">
        <div className="text-3xl font-extrabold -tracking-wider select-none cursor-pointer hover:text-gray-800 transition-colors uppercase">
          Cine.
        </div>
      </Link>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <div className="hidden md:block flex-1 mx-12">
        <ul className="flex justify-center space-x-8">
          {NAVIVATION_LINKS.map((genre) => (
            <NavLink
              to={genre.url}
              key={genre.url}
              className="cursor-pointer hover:text-gray-800 transition-colors font-light relative group"
            >
              {genre.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {!user ? (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <ul className="flex flex-col space-y-4">
            {NAVIVATION_LINKS.map((link) => (
              <li key={link.url}>
                <NavLink
                  to={link.url}
                  className="block py-2 hover:text-gray-800 transition-colors font-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4">
            <div className="pt-2">
              {!user ? (
                <Link to="/login" className="block w-full">
                  <Button className="w-full">Login</Button>
                </Link>
              ) : (
                <Button onClick={logout} className="w-full">
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
