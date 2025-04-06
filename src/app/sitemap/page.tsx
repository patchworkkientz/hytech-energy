"use client"
import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sitemap() {

    return (
        <>
            <Header />
            <ul id="sitemap">
                <li><a href="/estimates">Estimate</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/incentives-financing">Incentives & Financing</a></li>
                <li><a href="/gallery">Client Gallery</a></li>
                <li><a href="/renewable-energy">Renewable Energy</a></li>
                <li><a href="/team">Team</a></li>
            </ul>
            <Footer />
        </>
    );
}
