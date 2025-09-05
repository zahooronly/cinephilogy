import { useEffect, useState } from "react";
import { PosterCard } from "../../components/layout/PosterCard";
import { MoviesAPI } from "../../services/api";
import { IMAGES_BASE_URL } from "../../lib/constants";
import { Link } from "react-router";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesAPI.getAll()
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.log("Error: ", err));
  }, []);
  return (
    <div className="my-[74px] px-4 sm:px-6 md:px-8">
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {movies
          .filter((movie) => movie.poster_path)
          .filter((movie) => movie.title !== "Together")
          .map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <PosterCard
                key={movie.id}
                title={movie.title}
                imageUrl={`${IMAGES_BASE_URL}${movie.poster_path}`}
                year={movie.release_date}
                type="MOVIE"
                voteCount={movie.vote_count}
                runtime={movie.runtime}
                overview={movie.overview}
                averateVote={movie.vote_average}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Movies;
