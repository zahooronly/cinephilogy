import { useState } from "react";
import { PosterCard } from "../../components/layout/PosterCard";
import { MoviesAPI } from "../../services/api";
import { Pagination } from "../../components/layout/Pagination";
import SearchIcon from "../../assets/svgs/search.svg?react";
import HeaderFooter from "../../components/layout/HeaderFooter";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../../hooks/useDebounce";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const fetchMovies = async ({ queryKey }) => {
    const [_key, page, debouncedSearch] = queryKey;
    return debouncedSearch
      ? await MoviesAPI.getSearchedMovies(debouncedSearch)
      : await MoviesAPI.getAll(page);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", page, debouncedSearch],
    queryFn: fetchMovies,
  });

  if (isLoading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSearchQuery = (e) => setSearchQuery(e.target.value);

  return (
    <HeaderFooter>
      <div className="my-[74px] px-4 sm:px-6 md:px-8">
        <div className="flex justify-end items-center my-4 relative">
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={handleSearchQuery}
            className="px-4 py-2 border border-gray-700 w-md focus:border-black hover:border-gray-900 transition-colors duration-200 
          bg-white text-gray-900 placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <SearchIcon className="absolute w-5 h-5 right-2" />
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {data.data.results.length !== 0 ? (
            data.data.results
              .filter((movie) => movie.poster_path)
              .filter((movie) => movie.title !== "Together")
              .map((movie, index) => <PosterCard key={index} movie={movie} />)
          ) : (
            <div>
              <h1 className="text-3xl font-thin text-center text-black">
                No movies to display :(
              </h1>
            </div>
          )}
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </HeaderFooter>
  );
};

export default Movies;
