"use client";
import {useSearchContext} from "@/context/SearchProvider";
import {useEffect, useState} from "react";

import {Movie} from "../page";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";

const SearchPage = () => {
  const {state, setState} = useSearchContext();
  const [movieList, setMovieList] = useState<Movie[]>([]);
  useEffect(() => {
    (async () => {
      //react query 변경
      const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${state}`);
      const searchResult = await res.json();
      if (searchResult && searchResult.Search) {
        const list = searchResult.Search as Movie[];
        setMovieList(list);
      }
    })();

    return () => {
      setState("");
    };
  }, [state, setState]);
  return (
    <div className="flex flex-wrap">
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} id={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} />
      ))}
    </div>
  );
};

export default SearchPage;
