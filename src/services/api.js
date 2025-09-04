import axios from "axios";
import axiosInstance from "./axios";
import { AUTH_API_URL } from "../lib/constants";

const API_URLS = {
  MOVIES: {
    ALL: "/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc",
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    DETAILS: "/movie/movie_id",
    SIMILAR: "/movie/movie_id/similar?language=en-US",
  },
  TV: {
    ALL: "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc",
  },
};

export const MoviesAPI = {
  getAll: async () => {
    const response = await axiosInstance.get(API_URLS.MOVIES.ALL);
    return response;
  },
  getMovieDetail: async (id) => {
    const response = await axiosInstance.get(
      API_URLS.MOVIES.DETAILS.replace("movie_id", id)
    );
    return response.data;
  },
  getSimilar: async (id) => {
    const response = await axiosInstance.get(
      API_URLS.MOVIES.SIMILAR.replace("movie_id", id)
    );
    return response.data;
  },
  getPopular: async () => {
    const response = await axiosInstance.get(API_URLS.MOVIES.POPULAR);
    return response.data;
  },
  getTopRated: async () => {
    const response = await axiosInstance.get(API_URLS.MOVIES.TOP_RATED);
    return response.data;
  },
  getUpcoming: async () => {
    const response = await axiosInstance.get(API_URLS.MOVIES.UPCOMING);
    return response.data;
  },
};

export const TvAPI = {
  getAll: async () => {
    const response = await axiosInstance.get(API_URLS.TV.ALL);
    return response.data;
  },
};

export const AuthAPI = {
  login: async (data) => {
    const response = await axios.post(`${AUTH_API_URL}/users/login/`, data);
    return response.data;
  },
};
