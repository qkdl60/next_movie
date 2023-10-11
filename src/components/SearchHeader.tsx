"use client";

import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
import {useSearchContext} from "@/context/SearchProvider";
const SearchHeader = () => {
  const [Input, setInput] = useState<string>("");
  const {state, setState} = useSearchContext();
  const searchInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.target) {
      setState(Input);
    }
    setInput("");
  };
  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const value = event.target.value;
      setInput(value);
    }
  };
  return (
    <header>
      <form onSubmit={searchInput}>
        <input
          className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="search"
          onChange={changeInput}
          value={Input}
          style={{color: "black"}}
        />
        <button type="submit" className="rounded-full px-3 bg-sky-500 text-white  ">
          search
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
