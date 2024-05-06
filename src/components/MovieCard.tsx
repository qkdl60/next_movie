"use client";
import Image from "next/image";
import Link from "next/link";

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const MovieCard = ({Title, Year, Poster, imdbID, ...props}: Search) => {
  return (
    <Link href={`/movie/${imdbID}`} className="flex-column justify-center hover:scale-110 transition duration-150 w-[200px]">
      {Poster === "N/A" ? <div>null</div> : <Image src={Poster} alt={Title} width={300} height={20} priority style={{objectFit: "contain"}} />}
      <h2 className="truncate">{Title}</h2>
      <h3>{Year}</h3>
    </Link>
  );
};
export default MovieCard;
