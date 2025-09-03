import React from "react";
import { Card } from "../../components/layout/Card";

const Movies = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Movies</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            title={`Movie Title ${index + 1}`}
            imageUrl="https://m.media-amazon.com/images/I/81PB+SCj2XL._AC_SL1500_.jpg"
            year={`${2020 + index}`}
            rating={`${(Math.random() * 5).toFixed(1)}`}
            type={index % 2 === 0 ? "movie" : "series"}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
