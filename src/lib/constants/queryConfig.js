export const REACT_QUERY_CONFIG = {
  DEFAULT: {
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 0,
  },
  STATIC: {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
  },
};
