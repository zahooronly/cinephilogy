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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  
  useEffect(() => {
    setSearchQuery(search);
  }, []);

  const updateSearch = useCallback(
    debounce((value) => {
      setSearchQuery(value);
      value.trim() ? setSearchParams({ search: value }) : setSearchParams({});
    }, 500),
    [setSearchParams]
  );

  const handleSearchQuery = (e) => updateSearch(e.target.value);

  const fetchMovies = async ({ pageParam = 1 }) => {
    const getMovies = searchQuery
      ? () => MoviesAPI.getSearchedMovies(searchQuery, pageParam)
      : () => MoviesAPI.getAll(pageParam);
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
      searchQuery={search}
    >
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          isFetchingNextPage ? (
            <Loader />
          ) : null
        }
        endMessage={
          !isFetchingNextPage && !hasNextPage ? (
            <p className="text-center text-gray-400 mt-4">
              You have reached the end 🎬
            </p>
          ) : null
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
