import {useEffect, useState} from "react";

import Router from "next/router";
import type { AppProps } from 'next/app'
import Head from "next/head";
import { useRouter } from "next/router";

import HeaderSection from "@/components/header-section";
import FooterSection from "@/components/footer-section";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Preloader from "@/components/preloader";

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const showLoader = () => {
      setIsLoading(true);
    };

    const removeLoader = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", showLoader);
    Router.events.on("routeChangeComplete", removeLoader);
    Router.events.on("routeChangeError", removeLoader);

    return () => {
      Router.events.off("routeChangeStart", showLoader);
      Router.events.off("routeChangeComplete", removeLoader);
      Router.events.off("routeChangeError", removeLoader);
    };
  }, [router])



  const pageLayout =
      <>
        <HeaderSection/>
        <Component {...pageProps} />
        <FooterSection/>
        <ScrollToTopButton/>
      </>

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>SkyNet | Cyber Arena</title>
      <meta name="description" content="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    {isLoading && <Preloader/>}

    {!isLoading && pageLayout}
  </>
}
