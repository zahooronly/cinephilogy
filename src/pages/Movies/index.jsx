import { useEffect, useState } from "react";
import { PosterCard } from "../../components/layout/PosterCard";
import { MoviesAPI } from "../../services/api";
import { IMAGES_BASE_URL } from "../../lib/constants";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesAPI.getAll()
      .then((response) => setMovies(response.data.results))
      .then(() => console.log(movies))
      .catch((err) => console.log("Error: ", err));
  }, [movies]);
  return (
    <div className="mt-[74px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {movies.map((movie, index) => (
          <PosterCard
            key={index}
            title={movie.title}
            imageUrl={`${IMAGES_BASE_URL}${movie.poster_path}`}
            year={movie.release_date}
            type="MOVIE"
            voteCount={movie.vote_count}
            runtime={movie.runtime}
            overview={movie.overview}
            averateVote={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
