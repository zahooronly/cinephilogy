import { Link } from "react-router";
import { GENRES, LEGAL, NAVIVATION_LINKS } from "../../routes/routes";
import FacebookIcon from "../../assets/svgs/facebook.svg?react";
import InstagramIcon from "../../assets/svgs/instagram.svg?react";
import TwitterIcon from "../../assets/svgs/twitter.svg?react";
import YoutubeIcon from "../../assets/svgs/youtube.svg?react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and social section - stacked on mobile, side by side on larger screens */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
          <div className="mb-6 sm:mb-0">
            <Link to="/">
              <div className="text-2xl sm:text-3xl font-extrabold -tracking-wider select-none cursor-pointer hover:text-gray-300 transition-colors uppercase mb-4">
                Cine.
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs mb-4">
              Your ultimate destination for movies and TV shows. Discover,
              explore, and enjoy the best of cinema.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Youtube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation links - improved grid for better mobile layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
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
            <h3 className="text-lg font-semibold mb-3">Genres</h3>
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

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
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

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2">
              support@cinephilogy.com
            </p>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-800 my-6"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <p>&copy; {currentYear} Cinephilogy. All Rights Reserved.</p>
          </div>
          <div className="text-center sm:text-right">
            <p>Made with ❤️ for movie lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
