import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    //http://api.themoviedb.org/3/movie/150689?api_key=###
});

export default instance;