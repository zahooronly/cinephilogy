export const Header = () => {
  const navigationLinks = [
    { title: "All", url: "/" },
    { title: "Movies", url: "/movies" },
    { title: "TV", url: "/tv" },
  ];
  return (
    <nav className="bg-white text-black px-8 py-4 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="text-3xl font-extrabold -tracking-wider select-none cursor-pointer hover:text-gray-800 transition-colors uppercase">
        Cine.
      </div>

      <div className="flex-1 mx-12">
        <ul className="flex justify-center space-x-8">
          {navigationLinks.map((genre) => (
            <li
              key={genre.url}
              className="cursor-pointer hover:text-gray-800 transition-colors font-light relative group"
            >
              {genre.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-6">
        <div className="search relative">
          <input
            type="text"
            placeholder="Search movies..."
            className="bg-white text-zinc-900 px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
          />
          <svg
            className="w-5 h-5 absolute right-3 top-2.5 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full font-medium transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
};
