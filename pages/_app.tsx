import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Théo Matussière</title>
      </Head>
      <nav className="hidden bg-red-500 text-white">menu</nav>
      <div className="max-w-2xl flex flex-col space-y-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;