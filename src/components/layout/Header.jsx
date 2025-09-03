import { Link, NavLink } from "react-router";
import { Button } from "../ui/Button";
import { useLogout } from "../../hooks/useLogout";
import { getUser } from "../../lib/utils/getUser";
import { NAVIVATION_LINKS } from "../../lib/constants";
import SearchIcon from "../../assets/svgs/search.svg?react";

export const Header = () => {
  const logout = useLogout();
  const user = getUser();
  return (
    <nav className="bg-white text-black px-8 py-4 flex items-center justify-between fixed w-full top-0 z-50">
      <Link to="/">
        <div className="text-3xl font-extrabold -tracking-wider select-none cursor-pointer hover:text-gray-800 transition-colors uppercase">
          Cine.
        </div>
      </Link>

      <div className="flex-1 mx-12">
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

      <div className="flex items-center space-x-6">
        <div className="search relative">
          <input
            type="text"
            placeholder="Search movies..."
            className="bg-white font-thin text-zinc-900 px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black transition-all"
          />
          <SearchIcon className="w-5 h-5 absolute right-3 top-2.5 text-gray-800" />
        </div>

        {!user ? (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </div>
    </nav>
  );
};
