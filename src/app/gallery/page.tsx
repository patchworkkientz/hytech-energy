"use client"
import { useEffect } from "react";
import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gallery() {

    let Images = new Array(16).fill(0).map((i) => i++)

    return (
        <>
            <Header />
            <main id="main-gallery">
                <div className="gallery">
                    {Images.map((_, i) => {
                        return (
                            // when pics where anchor tags: href={`/installments#slide-${i}`}
                            <div id={`slide-${i}`} style={{ backgroundImage: `url('/imgs/${i}.jpg')` }}
                                className={ i <= 7 ? "client" : "client show-client"} key={i}></div>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}
