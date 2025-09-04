import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesAPI } from "../../../services/api";

const MoviesDetail = () => {
  const id = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    MoviesAPI.getMovieDetail(id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return <div>MoviesDetail</div>;
};

export default MoviesDetail;
