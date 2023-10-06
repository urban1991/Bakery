import React, {type PropsWithChildren} from "react";
import Head from "next/head";

type PageHeadProps = PropsWithChildren<{
    title: string;
}>

const PageHead = ({title, children}: PageHeadProps) => {
    return (
        <Head>
            <title>{title}</title>
            {children}
        </Head>
    );
};

export {PageHead};
