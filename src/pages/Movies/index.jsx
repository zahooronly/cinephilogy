import { useCallback, useMemo } from "react";
import { MovieCard } from "../../components/layout/MovieCard";
import { MoviesAPI } from "../../services/api";
import { Pagination } from "../../components/layout/Pagination";
import SearchIcon from "../../assets/svgs/search.svg?react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router";
import { debounce } from "lodash";
import { SafeRender } from "../../components/layout/SafeRender";
import { REACT_QUERY_CONFIG } from "../../lib/constants/queryConfig";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const updateSearch = useCallback(
    debounce((value) => {
      value.trim() ? setSearchParams({ query: value }) : setSearchParams({});
    }, 500),
    [setSearchParams]
  );

  const handleSearchQuery = (e) => updateSearch(e.target.value);

  const fetchMovies = async ({ pageParam = 1 }) => {
    return searchQuery
      ? await MoviesAPI.getSearchedMovies(searchQuery)
      : await MoviesAPI.getAll(pageParam);
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", searchQuery],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage) =>
      lastPage.data.page < lastPage.data.total_pages
        ? lastPage.data.page + 1
        : undefined,
    ...REACT_QUERY_CONFIG.PAGINATED,
  });

  const movies = useMemo(
    () => data?.pages?.flatMap((page) => page.data.results) || [],
    [data]
  );

  return (
    <SafeRender error={error} isLoading={isLoading}>
      <div className="my-[74px] px-4 sm:px-6 md:px-8">
        <div className="flex justify-end items-center my-4 relative">
          <input
            type="text"
            placeholder="Search for a movie"
            defaultValue={searchQuery}
            onChange={handleSearchQuery}
            className="px-4 py-2 border border-gray-700 w-md focus:border-black hover:border-gray-900 transition-colors duration-200 
          bg-white text-gray-900 placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <SearchIcon className="absolute w-5 h-5 right-2" />
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {movies?.length !== 0 ? (
            movies
              ?.filter((movie) => movie.poster_path)
              ?.filter((movie) => movie.title !== "Together")
              ?.map((movie) => (
                <Link to={`${movie.id}`} key={movie.id}>
                  <MovieCard movie={movie} />
                </Link>
              ))
          ) : (
            <div>
              <h1 className="text-3xl font-thin text-center text-black">
                No movies to display :(
              </h1>
            </div>
          )}
        </div>
        {hasNextPage && (
          <Pagination
            onClick={fetchNextPage}
            disabled={isFetchingNextPage}
            isLoading={isFetchingNextPage}
            title={isFetchingNextPage ? "Loading..." : "Load More"}
          />
        )}
      </div>
    </SafeRender>
  );
};

export default Movies;
