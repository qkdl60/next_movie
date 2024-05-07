import axios from "axios";
export const getMovieDetail = (apiKey: string, id: string) => axios.get(`https://omdbapi.com?apikey=${apiKey}&i=${id}`).then((res) => res.data);
