import { useCallback, useEffect, useMemo, useState } from "react";
import { MovieCard } from "../../components/layout/MovieCard";
import { MoviesAPI } from "../../services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router";
import { debounce } from "lodash";
import { SafeRender } from "../../components/layout/SafeRender";
import { REACT_QUERY_CONFIG } from "../../lib/constants/queryConfig";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../components/ui/Loader";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [queryParams, setQueryParams] = useSearchParams();
  const searchParams = queryParams.get("search");

  useEffect(() => {
    setSearch(searchParams);
  }, []);

  const updateSearch = useCallback(
    debounce((value) => {
      setSearch(value);
      value ? setQueryParams({ search: value }) : setQueryParams({});
    }, 500),
    [setQueryParams]
  );

  const handleSearch = (e) => updateSearch(e.target.value);
  const fetchMovies = async ({ pageParam = 1 }) => {
    const movieSearchParams = {
      query: search,
      page: pageParam,
    };
    const getMovies = search
      ? () => MoviesAPI.getSearchedMovies(movieSearchParams)
      : () => MoviesAPI.getAll(movieSearchParams);
    return await getMovies();
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", search],
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
      handleSearch={handleSearch}
      search={search}
    >
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={isFetchingNextPage ? <Loader /> : null}
        endMessage={
          !hasNextPage && (
            <p className="text-center text-gray-400 mt-4">
              You have reached the end 🎬
            </p>
          )
        }
      >
        <div className="flex gap-5 py-8 flex-wrap justify-center items-center">
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
      </InfiniteScroll>
    </SafeRender>
  );
};

export default Movies;
