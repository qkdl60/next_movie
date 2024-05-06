import MovieCard from "@/components/MovieCard";

const SearchPage = async ({params, searchParams}: {params: {slug: string}; searchParams?: {[key: string]: string | string[] | undefined}}) => {
  const result: ResponseValue = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${searchParams?.value}&page=1`)
    .then((result) => {
      if (result.ok) return result.json();
      return undefined;
    })
    .then((result) => {
      if (result && result.Response === "True") return result;
      return {Search: []};
    });
  return (
    <div>
      {result.Search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};

export default SearchPage;
interface ResponseValue {
  Search: Movie[];
  totalResults: string;
  Response: "True";
}
interface ErrorValue {
  Response: "False";
  Error: string;
}
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
