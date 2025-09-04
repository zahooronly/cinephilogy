import { useEffect, useState } from "react";
import { Card } from "../../components/layout/Card";
import { TvAPI } from "../../services/api";
import { IMAGES_BASE_URL } from "../../lib/constants";

const TV = () => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    TvAPI.getAll().then((data) => setTvShows(data.results));
  }, []);
  return (
    <div className="mt-[74px]">
      <div className="flex flex-wrap justify-center items-center gap-5">
        {tvShows.map((tvShow, index) => (
          <Card
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
