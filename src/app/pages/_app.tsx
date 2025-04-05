// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "../lib/api";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Component {...pageProps} />
//     </QueryClientProvider>
//   );
// }

import {Navbar} from "../components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
