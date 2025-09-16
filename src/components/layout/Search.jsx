import SearchIcon from "../../assets/svgs/search.svg?react";

export const Search = ({ search, handleSearch }) => {
  return (
    <div className="flex justify-end items-center my-4 relative">
      <input
        type="text"
        placeholder="Search for a movie"
        defaultValue={search}
        onChange={handleSearch}
        className="px-4 py-2 border border-gray-700 w-md focus:border-black hover:border-gray-900 transition-colors duration-200 
                  bg-white text-gray-900 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-gray-800"
      />
      <SearchIcon className="absolute w-5 h-5 right-2" />
    </div>
  );
};
