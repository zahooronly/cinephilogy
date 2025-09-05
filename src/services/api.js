import axios from "axios";
import axiosInstance from "./axios";
import { AUTH_API_URL } from "../lib/constants";

export const MoviesAPI = {
  getAll: async () => {
    const response = await axiosInstance.get("/discover/movie", {
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        sort_by: "popularity.desc",
      },
    });
    return response;
  },
  getMovieDetail: async (id) => {
    const response = await axiosInstance.get(`/movie/${id}`, {
      params: {
        language: "en-US",
      },
    });
    return response;
  },
  getSearchedMovies: async (query) => {
    const response = await axiosInstance.get(`/search/movie`, {
      params: {
        include_adult: false,
        language: "en-US",
        query: query,
      },
    });
    return response;
  },
  getSimilar: async (id) => {
    const response = await axiosInstance.get(`/movie/${id}/similar`, {
      params: {
        language: "en-US",
      },
    });
    return response;
  },
  getPopular: async () => {
    const response = await axiosInstance.get(`/movie/popular`, {
      params: {
        language: "en-US",
      },
    });
    return response;
  },
  getTopRated: async () => {
    const response = await axiosInstance.get(`/movie/top_rated`, {
      params: {
        language: "en-US",
      },
    });
    return response;
  },
  getUpcoming: async () => {
    const response = await axiosInstance.get(`/movie/upcoming`, {
      params: {
        language: "en-US",
      },
    });
    return response;
  },
};

export const TvAPI = {
  getAll: async () => {
    const response = await axiosInstance.get(`/discover/tv`, {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: "en-US",
        sort_by: "popularity.desc",
      },
    });
    return response;
  },
};

export const AuthAPI = {
  login: async (data) => {
    const response = await axios.post(`${AUTH_API_URL}/users/login/`, data);
    return response;
  },
};
