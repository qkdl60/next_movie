import SearchHeader from "@/components/SearchHeader";
import {Suspense} from "react";
import LoadingPage from "./loading";

const Layout = ({children}: {children: React.ReactNode}) => {
  // TODO왜 로딩 처리가 안되지 ?
  return (
    <>
      <SearchHeader />
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </>
  );
};

export default Layout;
