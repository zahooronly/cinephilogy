import { useState } from "react";
import { PosterCard } from "../../components/layout/PosterCard";
import { MoviesAPI } from "../../services/api";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    try {
      const response = await MoviesAPI.getSearchedMovies(searchQuery);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white mt-[74px]">
      <div className="bg-black py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Search Movies
          </h1>
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for movies..."
              className="w-full px-6 py-4 text-lg rounded-full bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {movies.map((movie) => (
              <PosterCard
                key={movie.id}
                title={movie.title}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                year={movie.release_date?.split("-")[0]}
                type="Movie"
                overview={movie.overview}
                voteCount={movie.vote_count}
                averateVote={movie.vote_average}
                runtime={movie.runtime}
              />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center text-gray-600">
            No movies found for "{searchQuery}"
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
