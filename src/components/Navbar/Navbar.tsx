import React from "react";
import Image from "next/image";
import {Oswald} from "next/font/google";

const oswald = Oswald({
    subsets: ["latin-ext"],
    variable: "--font-oswald",
    weight: ["400", "500", "700"]
})

const Navbar = () => {
    return (
        <nav className="w-72 h-full bg-amber-800 flex flex-col items-center">
            <div className="flex flex-col mt-8 items-center">
                <Image src="/images/bakery-logo.svg" alt="Piekarnia logo" width={200} height={200} priority />
                <h1 className={`${oswald.variable} font-sans font-medium text-lg mt-4`}>PIEKARNIA BIEŻYŃSKI</h1>
                <h3>slogan</h3>
            </div>
            <hr />
            <div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
            <hr />

            <div>
                social media icons
            </div>
        </nav>
    );
};

export {Navbar};
