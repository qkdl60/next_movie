import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import PageComponent from "./_component/PageComponent";
import {getMovieDetail} from "@/api/getMovieDetail";
import {cookies} from "next/headers";
export default async function Page({params}: {params: Params}) {
  const queryClient = new QueryClient();
  const apiKey = cookies().get("apiKey")?.value || "";
  const {id} = params;
  await queryClient.prefetchQuery({queryKey: ["movie"], queryFn: () => getMovieDetail(apiKey, id)});

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.

    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageComponent id={id} />
    </HydrationBoundary>
  );
}
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
