import {useRouter} from "next/router";
import Head from "next/head";

import Preloader from "@/components/preloader";

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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <div>
                Home
            </div>
        </>
    )
}

export default HomePage