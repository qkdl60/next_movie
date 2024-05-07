"use client";
import {getMovieDetail} from "@/api/getMovieDetail";
import {useQuery} from "@tanstack/react-query";
import {getCookie} from "cookies-next";
import Image from "next/image";
const detail = ["Title", "Year", "Director", "Writer", "Actors", "Plot"] as const;
const PageComponent = ({id}: {id: string}) => {
  const apiKey = getCookie("apiKey") || "";
  const movieDetail = useQuery({queryKey: ["movie"], queryFn: () => getMovieDetail(apiKey, id)}).data;
  console.log(movieDetail);
  return (
    <div>
      {"ij"}
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

export default PageComponent;

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
