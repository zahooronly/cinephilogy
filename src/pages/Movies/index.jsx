import { useEffect, useState } from "react";
import { Card } from "../../components/layout/Card";
import { MoviesAPI } from "../../services/api";
import { IMAGES_BASE_URL } from "../../lib/constants";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MoviesAPI.getAll().then((data) => setMovies(data.results));
  }, []);
  return (
    <div className="mt-[74px]">
      <div className="flex flex-wrap justify-center items-center gap-5">
        {movies.map((movie, index) => (
          <Card
            key={index}
            title={movie.title}
            imageUrl={`${IMAGES_BASE_URL}${movie.poster_path}`}
            year={movie.release_date}
            rating={movie.vote_average}
            voteCount={movie.vote_count}
            runtime={movie.runtime}
            genres={movie.genres}
            homepageURL={movie.homepage}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
