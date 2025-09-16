import { create } from "zustand";
import { persist } from "zustand/middleware";

const favouriteMoviesStore = (set) => ({
  favouriteMovies: [],
  addFavourite: (movie) => {
    set((state) => ({ favouriteMovies: [movie, ...state.favouriteMovies] }));
  },
  removeFavourite: (movieId) => {
    set((state) => ({
      favouriteMovies: state.favouriteMovies.filter(
        (movie) => movie.id !== movieId
      ),
    }));
  },
});

const useFavouriteMoviesStore = create(
  persist(favouriteMoviesStore, { name: "favouriteMovies" })
);
export default useFavouriteMoviesStore;
