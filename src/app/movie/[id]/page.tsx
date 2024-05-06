"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
const detail = ["Title", "Year", "Director", "Writer", "Actors", "Plot"] as const;
const MoviePage = ({params}: {params: Params}) => {
  const {id} = params;

  const [movieDetail, setMovieDetail] = useState<ResponseValue | null>(null);
  useEffect(() => {
    fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}`)
      .then((res) => res.json())
      .then((movie) => setMovieDetail(movie));
  }, [id]);
  return (
    <div>
      {movieDetail && <Image src={movieDetail.Poster} width={800} height={800} alt={movieDetail.Title} />}
      {movieDetail && (
        <div className="flex flex-wrap gap-4">
          {detail.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold ">{item}</h3>
              <h4>{movieDetail[item] ?? "null"}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviePage;

interface Params {
  id: string;
}
interface ResponseValue {
  [key: string]: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
