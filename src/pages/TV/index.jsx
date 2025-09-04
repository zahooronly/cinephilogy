import { useEffect, useState } from "react";
import { PosterCard } from "../../components/layout/PosterCard";
import { TvAPI } from "../../services/api";
import { IMAGES_BASE_URL } from "../../lib/constants";

const TV = () => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    TvAPI.getAll()
      .then((response) => setTvShows(response.data.results))
      .then((data) => console.log(data))
      .catch((err) => console.log("Error: ", err));
  }, [tvShows]);
  return (
    <div className="mt-[74px] px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {tvShows.map((tvShow, index) => (
          <PosterCard
            key={index}
            title={tvShow.original_name}
            imageUrl={`${IMAGES_BASE_URL}${tvShow.poster_path}`}
            year={tvShow.first_air_date}
            type="TV"
            voteCount={tvShow.vote_count}
            runtime={tvShow.runtime}
            overview={tvShow.overview}
            averateVote={tvShow.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default TV;
