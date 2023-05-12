import {useEffect, useState} from "react";

import Router from "next/router";
import type { AppProps } from 'next/app'
import Head from "next/head";
import { useRouter } from "next/router";

import HeaderSection from "@/components/header-section";
import FooterSection from "@/components/footer-section";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Preloader from "@/components/preloader";

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/lineicons.css'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    typeof document !== undefined
        ? require("bootstrap/dist/js/bootstrap.js")
        : null

    const showLoader = () => {
      setIsLoading(true);
    };

    const removeLoader = () => {
      setIsLoading(false);
    };

    setTimeout(() => removeLoader(), 800)

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
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    {isLoading && <Preloader/>}

    {!isLoading && pageLayout}
  </>
}
