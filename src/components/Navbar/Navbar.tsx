import React from "react";
import Image from "next/image";

import navBackground from "$/public/images/navbar_background.jpg";
import Link from "next/link";
import {Divider} from "$/components/Divider";

const Navbar = () => {

    return (
        <nav className="w-72 h-full flex flex-col items-center relative bg-black">
            <Image
                src={navBackground}
                alt="Bakery navbar background"
                placeholder="blur"
                quality={100}
                fill
                style={{
                    objectFit: 'cover',
                    filter: "blur(2px) opacity(0.6)",
                }}
            />
            <div className="flex flex-col mt-8 items-center relative">
                <Image src="/images/bakery-logo.svg" alt="Piekarnia logo" width={200} height={200} priority />
                <h1 className={`font-oswald font-medium mt-2 text-3xl text-white`}>PIEKARNIA BIEŻYŃSKI</h1>
                <h3 className={`font-greatVibes text-3xl mt-4 text-white`}>Smak tradycji</h3>
            </div>
            <Divider className="z-10 mt-2" />
            <div className="flex relative mt-4 w-full bg-amber-300 ">
                <ul>
                    <li>
                        <Link href="/">Strona główna</Link>
                    </li>
                    <li>O nas</li>
                    <li>Produkty</li>
                    <li>Placówki</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            </div>
            {/*<hr />*/}

            <div>

                social media icons
            </div>
        </nav>
    );
};

export {Navbar};
