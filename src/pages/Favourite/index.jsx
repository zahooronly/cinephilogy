import HeaderFooter from "../../components/layout/HeaderFooter";
import { Button } from "../../components/ui/Button";
import useFavouriteMoviesStore from "../../app/favouriteMoviesStore";
import { FavouriteMovieCard } from "../../components/layout/FavouriteMovieCard";
import { Link } from "react-router";

const Favourite = () => {
  const { favouriteMovies } = useFavouriteMoviesStore();

  return (
    <HeaderFooter>
      <div className="my-[74px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          My Favourite Movies
        </h2>
        {favouriteMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-gray-600 dark:text-gray-400">
            <p className="text-lg mb-4">No favourite movies yet.</p>
            <Button onClick={() => (window.location.href = "/movies")}>
              Browse Movies
            </Button>
          </div>
        ) : (
          <div className="flex gap-5 flex-wrap justify-center items-center">
            {favouriteMovies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <FavouriteMovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </HeaderFooter>
  );
};

export default Favourite;
