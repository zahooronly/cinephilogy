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
import { Search } from "../../components/layout/Search";

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
    const apiCall = searchQuery
      ? () => MoviesAPI.getSearchedMovies(searchQuery)
      : () => MoviesAPI.getAll(pageParam);
    return await apiCall();
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
    <SafeRender
      error={error}
      isLoading={isLoading}
      handleSearchQuery={handleSearchQuery}
      searchQuery={searchQuery}
    >
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
    </SafeRender>
  );
};

export default Movies;
