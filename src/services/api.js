import axios from "axios";
import axiosInstance from "./axios";
import { AUTH_API_URL } from "../lib/constants";

export const MoviesAPI = {
  getAll: (page) => {
    return axiosInstance.get("/discover/movie", {
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        sort_by: "popularity.desc",
        page: page,
      },
    });
  },
  getMovieDetail: (id) => {
    return axiosInstance.get(`/movie/${id}`, {
      params: {
        language: "en-US",
      },
    });
  },
  getSearchedMovies: (query, page) => {
    return axiosInstance.get(`/search/movie`, {
      params: {
        include_adult: false,
        language: "en-US",
        query: query,
        page: page,
      },
    });
  },
};

export const AuthAPI = {
  login: (data) => {
    return axios.post(`${AUTH_API_URL}/users/login/`, data);
  },
};
