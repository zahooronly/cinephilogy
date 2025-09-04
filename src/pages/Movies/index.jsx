import { useEffect, useState } from "react";
import { Card } from "../../components/layout/Card";
import { MoviesAPI } from "../../services/api";
import { IMAGES_BASE_URL } from "../../lib/constants";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesAPI.getAll()
      .then((data) => setMovies(data.data.results))
      .then(() => console.log(movies))
      .catch((err) => console.log("Error: ", err));
  }, [movies]);
  return (
    <div className="mt-[74px]">
      <div className="flex flex-wrap justify-center items-center gap-5">
        {movies.map((movie, index) => (
          <Card
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
