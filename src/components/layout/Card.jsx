import { useState } from "react";
import StarIcon from "../../assets/svgs/star.svg?react";
import PlayIcon from "../../assets/svgs/play.svg?react";
import BookmarkIcon from "../../assets/svgs/bookmark.svg?react";

export const Card = ({
  title,
  imageUrl,
  year,
  rating,
  type,
  genres = [],
  overview = "",
  voteAverage = 0,
  runtime = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatRuntime = (minutes) => {
    if (!minutes) return "";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div
      className="relative w-[350px] h-[475px] transition-all duration-200 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gray-900">
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{voteAverage ? voteAverage.toFixed(1) : rating}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
          <h3 className="text-white font-semibold text-lg tracking-wide truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-gray-300 text-xs font-medium">
            <span className="text-gray-400">{year}</span>
            {runtime > 0 && (
              <>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{formatRuntime(runtime)}</span>
              </>
            )}
          </div>
        </div>

        {isHovered && (
          <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 flex flex-col justify-between p-6 transition-all duration-300">
            <div>
              <span className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-white uppercase tracking-wider">
                {type}
              </span>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl tracking-wide mb-2 font-sans">
                {title}
              </h3>

              <div className="flex items-center flex-wrap gap-2 text-gray-200 text-sm font-medium mb-2">
                <span className="text-gray-300">{year}</span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center text-yellow-400">
                  <StarIcon className="w-4 h-4 mr-1" />
                  {voteAverage ? voteAverage.toFixed(1) : rating}
                </span>
                {runtime > 0 && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">
                      {formatRuntime(runtime)}
                    </span>
                  </>
                )}
              </div>

              {genres.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {genres.slice(0, 3).map((genre, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-xs px-2 py-0.5 rounded-full text-gray-300"
                    >
                      {typeof genre === "object" ? genre.name : genre}
                    </span>
                  ))}
                </div>
              )}

              {overview && (
                <p className="text-gray-300 text-xs line-clamp-3 mb-2">
                  {overview}
                </p>
              )}

              <div className="flex items-center gap-2 mt-2">
                <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-md transition-colors">
                  <span className="flex items-center">
                    <PlayIcon className="w-3 h-3 mr-1" />
                    Watch
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
