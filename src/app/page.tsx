import MovieCard from "@/components/MovieCard";

/*
요청 주소: https://omdbapi.com
Method: GET
API_KEY: 7035c60c
*/
export interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}
const Home = async () => {
  const res = await fetch("https://omdbapi.com?apikey=7035c60c&s=home");
  const movieList = await res.json();
  const movies = movieList.Search as Movie[];
  //검색하고 api 가져오기
  return (
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} id={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} />
      ))}
    </div>
  );
};

export default Home;
