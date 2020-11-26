const API_KEY = "ad749450dee72a0f8593d7bf634193c4";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`  
}

export default requests;