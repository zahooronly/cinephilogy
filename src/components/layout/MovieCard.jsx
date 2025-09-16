import { useState } from "react";
import StarIcon from "../../assets/svgs/star.svg?react";
import { Tag } from "../ui/Tag";
import { IMAGES_BASE_URL } from "../../lib/constants";
import { formatRuntime } from "../../lib/utils";
import { Heart } from "lucide-react";
import { useFavouriteHandler } from "../../hooks/useFavouriteHandler";

export const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { isFavourite, handleClick } = useFavouriteHandler(movie);

  return (
    <div
      className="relative w-full sm:w-[170px] md:w-[250px] lg:w-[350px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[475px] transition-all duration-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gray-900">
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img
            src={`${IMAGES_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-black bg-white/70 backdrop-blur-sm overflow-hidden rounded-full">
            <Tag title={`Votes: ${movie.vote_count}`} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-4 flex flex-col justify-end">
          <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide truncate">
            {movie.title}
          </h3>
          <div className="flex items-center gap-1 sm:gap-2 text-gray-300 text-xs font-medium">
            <span className="text-gray-400">{movie.release_date}</span>
            {movie.runtime && (
              <>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">
                  {formatRuntime(movie.runtime)}
                </span>
              </>
            )}
          </div>
        </div>

        {isHovered && (
          <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 flex flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300">
            <div
              className="p-1.5 max-w-8 w-full rounded-full backdrop-blur-sm cursor-pointer transition-colors duration-200"
              onClick={handleClick}
            >
              <Heart
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  isFavourite ? "stroke-red-500" : "stroke-white"
                }`}
              />
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg sm:text-xl tracking-wide mb-1 sm:mb-2 font-sans">
                {movie.title}
              </h3>

              <div className="flex items-center flex-wrap gap-1 sm:gap-2 text-gray-200 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                <span className="text-gray-300">{movie.release_date}</span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center text-yellow-400">
                  <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {movie.vote_average}
                </span>
                {movie.runtime > 0 && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">
                      {formatRuntime(movie.runtime)}
                    </span>
                  </>
                )}
              </div>

              {movie.overview && (
                <p className="text-gray-300 font-thin text-xs line-clamp-2 sm:line-clamp-3 mb-1 sm:mb-2">
                  {movie.overview}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
