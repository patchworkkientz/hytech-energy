"use client"
import { useEffect } from "react";
import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RenewableEnergy() {

    return (
        <>
            <Header />
            <main className="layout-main">
                <div className="page-banner renewable-banner">
                    <div className="banner-content">
                        {/* <h1>Partially off-grid if not entirely-off!</h1> */}
                        <a href="/?open_form" id="open_form"></a>
                    </div>
                </div>
                <div className="content-main renewable-energy-content">
                    <a id="read-spot"></a>
                    <p id="renewable-energy-headline">Renewable energy from the sun offers a powerful option for your home. By going fully off-grid, you rely solely on clean, sustainable power—no utility bills, no compromises. Whether you want to go all-in or start with a partial setup, we’ll design a solar solution that fits your vision for energy independence.</p>
                    <a href="#read-spot" id="scroll-down"></a>
                </div>
                <div id="topics">
                    <div className="card">
                        <div className="topic-icon"></div>
                        <h3>Made with the power of the sun</h3>
                        <p style={{ padding: "5px "}}>How sunlight is piped into your home as energy</p>
                        <a href="https://www.google.com/search?q=how+do+solar+panels+work&oq=how+do+solar+panels+work&aqs=chrome..69i57j0l5.8108j0j4&sourceid=chrome&ie=UTF-8">Check it out</a>
                    </div>
                    <div className="card">
                        <div className="topic-icon"></div>
                        <h3>Store your solar energy</h3>
                        <p style={{ padding: "5px "}}>Store unused energy generated from the sun</p>
                        <a href="https://www.google.com/search?ei=IA1iXInXFdCtrgST2LyoCA&q=can+you+save+energy+from+solar+panels+for+later&oq=can+you+save+energy+from+solar+panels+for+later&gs_l=psy-ab.3..33i22i29i30.61553.80942..81218...5.0..0.216.5630.20j31j1......0....1..gws-wiz.......0i71j35i39j0i67j0i131j0j0i3j0i10j0i22i30j0i20i263j33i299.sLqbCmlLbVY">Extra sunlight energy</a>
                    </div>
                    <div className="card">
                        <div className="topic-icon"></div>
                        <h3>Helping the world at home</h3>
                        <p style={{ padding: "5px "}}>Using solar energy isn’t just cost-effective—it’s part of a bold, global shift toward a smarter, more sustainable future.</p>
                        <a href="https://www.google.com/search?ei=dw1iXK6XJ8qW0wK_wLXwAw&q=do+my+solar+panels+help+the+environment&oq=do+my+solar+panels+help+the+&gs_l=psy-ab.1.0.33i299l3.44540.56828..58343...0.0..0.168.2853.12j16......0....1..gws-wiz.......0i71j35i39j0j0i131j0i67j0i20i263j0i22i30j33i22i29i30.AkJ_fDqzy6U">The future of energy</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
