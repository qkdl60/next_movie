"use client";

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import {ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false, // 다른 윈도우 탭 갔다 오면 다시 데이터를 가져오겠다
        retryOnMount: true, // 리액트에 컴포넌트가 언마운트 되었다가 다시 마운트 되면 데이터를 가져온다
        refetchOnReconnect: true, // 인터넷 연결이 끊겼다가 다시 연결되는 순간 가져온다
        retry: false, // 실패시 몇번 더 가져올 것인가, false 를 하면 에러페이지 보여줌
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Provider({children}: {children: ReactNode}) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
