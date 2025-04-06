"use client"
import { useEffect } from "react";
import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {

    return (
        <>
            {/* <input type="checkbox" id="parent" defaultChecked /> */}
            <Header />

            <main className="layout-main">
                <div className="page-banner services-banner">
                    <div className="banner-content">
                        {/* <h3>Your system is tailor made to match your expectations</h3> */}
                        <a href="/?open_form" id="open_form"></a>
                    </div>
                </div>
                <div className="services-content content-main">
                    <a id="read-spot"></a>
                    <h3 id="services-headline">Hytech Energy delivers the most cutting-edge clean and reliable energy systems to power your home.</h3>
                    <a href="#read-spot" id="scroll-down"></a>
                    <div id="service-top"></div>
                    <ol>
                        <li>
                            <div className="li-flex">
                                <div id="solar-panel-rooftop-1" className="service-picture"></div>
                                <div className="service-point">
                                    <h3>Solar Panel Rooftops</h3>
                                    <p>
                                        Where sunlight hits your roof the most, we’ll install solar panels to convert that light into energy for your home.
                                    </p>
                                </div>
                                <div id="solar-panel-rooftop-2" className="service-picture"></div>
                            </div>
                        </li>
                        <li>
                            <div className="li-flex">
                                <div id="ground-mounted-2" className="service-picture"></div>
                                <div className="service-point">
                                    <h3>Ground Mounted Solar Panels</h3>
                                    <p>
                                        Your ground property may offer the best—or simply additional—space to generate solar energy.
                                    </p>
                                </div>
                                <div id="ground-mounted-1" className="service-picture"></div>
                            </div>
                        </li>
                        <li>
                            <div className="li-flex">
                                <div id="battery-backup" className="service-picture"></div>
                                <div className="service-point">
                                    <h3>Battery Back Up Systems</h3>
                                    <p>
                                        Batteries store the energy generated from sunlight, allowing you to use it later. That way, even when there’s no sunlight, you can still power your home with stored solar energy.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </main>

            <Footer />
        </>
    );
}
