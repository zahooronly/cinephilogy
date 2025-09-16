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

  const handleToggleFavouritesClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    toggleFavourite();
  };

  return {
    isFavourite,
    handleToggleFavouritesClick,
  };
};
