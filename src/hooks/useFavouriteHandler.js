import useFavouriteMoviesStore from "../app/favouriteMoviesStore";

export const useFavouriteHandler = (movie) => {
  const { addFavourite, removeFavourite, favouriteMovies } =
    useFavouriteMoviesStore();

  const isFavourite = favouriteMovies.some(
    (favMovie) => favMovie.id === movie?.id
  );

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(movie.id);
    } else {
      addFavourite(movie);
    }
  };

  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    toggleFavourite();
  };

  return {
    isFavourite,
    handleClick,
  };
};
