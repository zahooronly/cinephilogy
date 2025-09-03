import { Link } from "react-router";
import { GENRES, LEGAL, NAVIVATION_LINKS } from "../../lib/constants";
import FacebookIcon from "../../assets/svgs/facebook.svg?react";
import InstagramIcon from "../../assets/svgs/instagram.svg?react";
import TwitterIcon from "../../assets/svgs/twitter.svg?react";
import YoutubeIcon from "../../assets/svgs/youtube.svg?react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/">
              <div className="text-3xl font-extrabold -tracking-wider select-none cursor-pointer hover:text-gray-300 transition-colors uppercase mb-4">
                Cine.
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Your ultimate destination for movies and TV shows. Discover,
              explore, and enjoy the best of cinema.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIVATION_LINKS.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Genres</h3>
            <ul className="space-y-2">
              {GENRES.map((genre) => (
                <li key={genre.url}>
                  <Link
                    to={genre.url}
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {genre.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL.map((item) => (
                <li key={item.url}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Cinephilogy. All Rights Reserved.</p>
          </div>
        </div>
        {/* asdfsd */}
      </div>
    </footer>
  );
};
