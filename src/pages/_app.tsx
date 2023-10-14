import {type AppType} from "next/app";
import {Oswald, Great_Vibes} from "next/font/google";
import {Layout} from "$/components/Layout";
import {api} from "$/utils/api";

import "$/styles/globals.css";

const oswald = Oswald({
    subsets: ["latin-ext"],
    weight: ["400", "700"],
    variable: "--font-oswald"
})

const greatVibes = Great_Vibes({
    subsets: ["latin-ext"],
    weight: ["400"],
    variable: "--font-great-vibes"
})



const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <Layout className={`${oswald.variable} ${greatVibes.variable}`}>
            <Component {...pageProps} />
        </Layout>
    );
};

export default api.withTRPC(MyApp);
