"use client";
import {createContext, useContext, useState} from "react";
interface contextType {
  state: string;
  setState: (state: string) => void;
}
const searchContext = createContext<contextType>({state: "", setState: () => {}});
export const useSearchContext = () => useContext(searchContext);
const SearchProvider = ({children}: {children: React.ReactNode}) => {
  const [search, setSearch] = useState<string>("");
  return (
    <searchContext.Provider
      value={{
        state: search,
        setState: (state) => {
          setSearch(state);
        },
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
export default SearchProvider;
