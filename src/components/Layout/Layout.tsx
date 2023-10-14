import React, {type PropsWithChildren} from "react";
import {Navbar} from "$/components/Navbar";
import {Footer} from "$/components/Footer";

type LayoutProps = PropsWithChildren<{
    className?: string;
}>

const Layout = ({className, children}: LayoutProps) => {
    return (
        <div className={`${className} flex w-full h-screen`}>
            <Navbar />
            <div className="flex flex-col flex-1 ">
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export {Layout};
