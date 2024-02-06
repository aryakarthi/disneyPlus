import axios from "axios";

const movieByGenreBaseURL = `${
  import.meta.env.VITE_TMDB_BASE_URL
}/discover/movie?api_key=${import.meta.env.VITE_TMDB_APIKEY}`;

const getTrendingVideos = axios.get(
  import.meta.env.VITE_TMDB_BASE_URL +
    "/trending/all/day?api_key=" +
    import.meta.env.VITE_TMDB_APIKEY
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
