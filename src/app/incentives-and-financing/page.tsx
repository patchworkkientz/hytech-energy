"use client"
import { useEffect } from "react";
import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IncentivesAndFinancing() {

    return (
        <>
            <Header />
            <main className="layout-main">
                <div className="page-banner finance-banner">
                    <div className="banner-content">
                        {/* <h2>Pay off your renewable energy installation with the same money your paying for utilities</h2> */}
                        <a href="/?open_form" id="open_form"></a>
                    </div>
                </div>
                <div className="content-main finance-content">
                    <a id="read-spot"></a>
                    <h3 id="incentives-headline">We’ll help you secure incredible financing options to make your solar energy system affordable and hassle-free—so you can start saving from day one.</h3>
                    <a href="#read-spot" id="scroll-down"></a>
                    <ul>
                        <li>
                            <p>We handle everything to ensure you get the maximum tax credits and government rebates. <a href="https://www.energysage.com/solar/cost-benefit/solar-incentives-and-rebates/">learn more?</a></p>
                            <div id="government_icon"></div>
                        </li>
                        <li>
                            <p>We offer Financing through leading renewable energy financiers</p>
                            <div id="financiers">
                                <a href="https://www.myeecu.org/home/products/loans-credit-cards/personal" className="financier"></a>
                                <a href="https://www.sungagefinancial.com" className="financier"></a>
                                <a href="https://ygrene.com" className="financier"></a>
                                <a href="https://www.pacefunding.com" className="financier"></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}
