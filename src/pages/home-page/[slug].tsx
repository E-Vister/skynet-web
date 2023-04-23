import {useRouter} from "next/router";
import Head from "next/head";

import Preloader from "@/components/preloader";
import Hero from "@/components/home-page-sections/hero";
import Promotions from "@/components/home-page-sections/promotions";

const HomePage = () => {
    const router = useRouter();
    if (router.isFallback) {
        return <Preloader />
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>SkyNet | Cyber Arena</title>
                <meta name="description" content={`description`} />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <Hero/>
            <Promotions/>
        </>
    )
}

export default HomePage