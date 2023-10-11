import Image from "next/image";
import Link from "next/link";

interface Search {
  Title: string;
  Year: string;
  id: string;
  Poster: string;
}

const MovieCard = ({Title, Year, Poster, id, ...props}: Search) => {
  return (
    <Link href={`/movie/${id}`} className="flex-column justify-center hover:scale-110 transition duration-150 w-[200px]">
      <Image src={Poster} alt={Title} width={200} height={200} />
      <h2 className="truncate">{Title}</h2>
      <h3>{Year}</h3>
    </Link>
  );
};
export default MovieCard;
