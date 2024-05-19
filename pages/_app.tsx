import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import CommModalGroup from "@/components/popup/CommModalGroup";
import Layout from "@/components/layout/Layout";
import store from "@/store";
import "@/styles/globals.css";
import "@/styles/popup.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="https://cdn.icon-icons.com/icons2/1465/PNG/512/740pill_100923.png" />
        <title>NSS</title>
      </Head>
      <Provider store={store}>
        <CommModalGroup />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
