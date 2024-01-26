import SearchHeader from "@/components/SearchHeader";
import {Suspense} from "react";
import LoadingPage from "./loading";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
};

export default Layout;
