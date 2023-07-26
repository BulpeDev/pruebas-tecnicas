import { AppProvider } from "@/context/AppContext";
import i18n from "@/i18n/i18n";
import "@/styles/globals.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";
import Head from "next/head";
import { ReactElement, ReactNode, useEffect } from "react";

export const outfit = Outfit({ subsets: ["latin"] });

export type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language != null) {
      i18n.changeLanguage(language);
    } else {
      localStorage.setItem("language", "es");
      i18n.changeLanguage("es");
    }
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </>
  );
}
