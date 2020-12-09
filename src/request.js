const API_KEY = "9d06cd8e6098a70fff03cea8f99d5f84";

// api_url = https://api.themoviedb.org/3/trending/all/week?api_key=9d06cd8e6098a70fff03cea8f99d5f84&language=en-US

const example_api_request =
  "https://api.themoviedb.org/3/movie/550?api_key=9d06cd8e6098a70fff03cea8f99d5f84";

const ReadAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDA2Y2Q4ZTYwOThhNzBmZmYwM2NlYThmOTlkNWY4NCIsInN1YiI6IjVmYWNlMTJjZGZhYWU5MDAzZTY0ZDNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CRTBQJesl8T997vt1bv0A2BaXNiPfMBWk2rB6nECCJ4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fettchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocuentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
