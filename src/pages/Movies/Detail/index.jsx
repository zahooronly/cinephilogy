import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { MoviesAPI } from "../../../services/api";
import BookmarkIcon from "../../../assets/svgs/bookmark.svg?react";
import PlayIcon from "../../../assets/svgs/play.svg?react";
import ShareIcon from "../../../assets/svgs/share.svg?react";
import HeartIcon from "../../../assets/svgs/heart.svg?react";
import ClockIcon from "../../../assets/svgs/clock.svg?react";
import GlobeIcon from "../../../assets/svgs/globe.svg?react";
import ArrowLeftIcon from "../../../assets/svgs/left-arrow.svg?react";
import CalendarIcon from "../../../assets/svgs/calender.svg?react";
import StarIcon from "../../../assets/svgs/star.svg?react";

import { IMAGES_BASE_URL } from "../../../lib/constants";
import { formatDate } from "../../../lib/utils/formateDate";
import { getStarRating } from "../../../lib/utils/getStarRating";
import { formatRuntime } from "../../../lib/utils/formateRuntime";
import { MovieButton } from "../../../components/ui/MovieButton";
import { Tag } from "../../../components/ui/Tag";
import HeaderFooter from "../../../components/layout/HeaderFooter";

const MoviesDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setIsLoading(true);
      try {
        const res = await MoviesAPI.getMovieDetail(Number(id));
        setMovie(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchMovieDetail();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <HeaderFooter>

    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-screen overflow-hidden">
        <div
    
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movie.backdrop_path}`})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/50" />

        <nav className="relative z-20 p-6">
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Movies</span>
          </button>
        </nav>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-8 lg:space-y-0 lg:space-x-12 w-full">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <img
                src={`${IMAGES_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-80 h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="flex-1 max-w-3xl text-center lg:text-left">
              {movie.tagline && (
                <p className="text-white/80 text-lg font-medium mb-4 italic">
                  "{movie.tagline}"
                </p>
              )}

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {movie.title}
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {movie.genres?.map((genre) => (
                  <Tag key={genre.id} title={genre.name} />
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-8 text-gray-300">
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">
                    {getStarRating(movie.vote_average)}
                  </span>
                  <span className="text-sm">({movie.vote_count} reviews)</span>
                </div>

                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{formatDate(movie.release_date)}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>{formatRuntime(movie.runtime)}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <GlobeIcon className="w-5 h-5" />
                  <span>{movie.origin_country?.[0]}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Link
                  to={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MovieButton className="bg-red-600 hover:bg-red-700 border-white/20">
                    <PlayIcon className="w-5 h-5" />
                    <span>Watch Now</span>
                  </MovieButton>
                </Link>

                <MovieButton className="bg-white/10 border-white/20 hover:bg-white/20">
                  <HeartIcon className="w-5 h-5" />
                  <span>Add to Favorites</span>
                </MovieButton>

                <MovieButton className="bg-white/10 border-white/20 hover:bg-white/20">
                  <BookmarkIcon className="w-5 h-5 " />
                  <span>Watchlist</span>
                </MovieButton>

                <MovieButton className="bg-white/10 border-white/20 hover:bg-white/20">
                  <ShareIcon className="w-5 h-5" />
                </MovieButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-black -mt-32 pt-32">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Plot Summary
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {movie.overview}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Movie Details
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span>{movie.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Original Language:</span>
                    <span className="capitalize">
                      {movie.original_language}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Popularity:</span>
                    <span>{movie.popularity?.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IMDB ID:</span>
                    <Link
                      to={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors underline"
                    >
                      {movie.imdb_id}
                    </Link>
                  </div>
                </div>
              </div>

              {movie.production_companies?.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Production
                  </h3>
                  <div className="space-y-2">
                    {movie.production_companies.map((company) => (
                      <div key={company.id} className="text-gray-300">
                        {company.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {movie.spoken_languages?.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Languages
                  </h3>
                  <div className="space-y-2">
                    {movie.spoken_languages.map((lang, index) => (
                      <div key={index} className="text-gray-300">
                        {lang.english_name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </HeaderFooter>
  );
};

export default MoviesDetail;
