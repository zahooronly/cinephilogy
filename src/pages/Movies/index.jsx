import { useCallback, useMemo, useState } from "react";
import { MovieCard } from "../../components/layout/MovieCard";
import { MoviesAPI } from "../../services/api";
import { Pagination } from "../../components/layout/Pagination";
import SearchIcon from "../../assets/svgs/search.svg?react";
import HeaderFooter from "../../components/layout/HeaderFooter";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader } from "../../components/ui/Loader";
import { DisplayError } from "../../components/ui/DisplayError";
import { Link } from "react-router";
import { REACT_QUERY_CONFIG } from "../../lib/constants/queryConfig";
import { debounce } from "lodash";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const debouncedSetSearch = useCallback(
    debounce((value) => {
      setDebouncedSearch(value);
    }, 500),
    []
  );

  const handleSearchQuery = (e) => {
    const value = e?.target?.value || "";
    setSearchQuery(value);
    debouncedSetSearch(value);
  };

  const fetchMovies = async ({ queryKey, pageParam = 1 }) => {
    const [_key] = queryKey;
    return debouncedSearch
      ? await MoviesAPI.getSearchedMovies(debouncedSearch)
      : await MoviesAPI.getAll(pageParam);
  };

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", debouncedSearch],
      queryFn: fetchMovies,
      ...REACT_QUERY_CONFIG.DEFAULT,
      getNextPageParam: (lastPage) => {
        return lastPage.data.page <= lastPage.data.total_pages
          ? lastPage.data.page + 1
          : undefined;
      },
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
    });
  const movies = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data.results);
  }, [data]);

  if (error)
    return (
      <HeaderFooter>
        <DisplayError errorMessage={error.message} cause={error?.cause} />
      </HeaderFooter>
    );

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
          {isLoading && <Loader />}
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
        {searchQuery.length === 0 && (
          <Pagination
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            isLoading={isFetchingNextPage}
            title={isFetchingNextPage ? "Loading..." : "Load More"}
          />
        )}
      </div>
    </HeaderFooter>
  );
};

export default Movies;
