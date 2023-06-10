import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "237ac8432039fa3424dcc6483ac9ac1e";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=237ac8432039fa3424dcc6483ac9ac1e";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
