const API_KEY = "03642e0f979db57096baf53192eac763";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&languauge=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
};
export default requests;
