import axios from "axios";
import axiosInstance from "./axios";
import { AUTH_API_URL } from "../lib/constants";


export const MoviesAPI = {
  getAll: async (pagination) => {
    const response = await axiosInstance.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${pagination}`
    );
    return response;
  },
  getMovieDetail: async (id) => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response;
  },
  getSearchedMovies: async (query) => {
    const response = await axiosInstance.get(
      `/search/movie?include_adult=false&language=en-US&query=${query}`
    );
    return response;
  },
  getSimilar: async (id) => {
    const response = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US`
    );
    return response;
  },
  getPopular: async () => {
    const response = await axiosInstance.get("/movie/popular");
    return response;
  },
  getTopRated: async () => {
    const response = await axiosInstance.get("/movie/top_rated");
    return response;
  },
  getUpcoming: async () => {
    const response = await axiosInstance.get("/movie/upcoming");
    return response;
  },
};

export const TvAPI = {
  getAll: async (pagination) => {
    const response = await axiosInstance.get(
      `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&page=${pagination}`
    );
    return response;
  },
};

export const AuthAPI = {
  login: async (data) => {
    const response = await axios.post(`${AUTH_API_URL}/users/login/`, data);
    return response;
  },
};
