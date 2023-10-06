import React, {type PropsWithChildren} from "react";
import {Navbar} from "$/components/Navbar";
import {Footer} from "$/components/Footer";

const Layout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export {Layout};
