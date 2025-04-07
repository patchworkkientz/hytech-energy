"use client"
import styles from "./page.module.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/EstimateForm";

export default function Licenses() {

    return (
        <>
            <Header />
            <EstimateForm />
            <main className="layout-main mission-layout">
                <div className="mission-banner">
                    <div id="greet">Meet the HyTech Energy Team</div>
                </div>
                <div className="mission-main">
                    <section id="flip-box-crate">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front profile one">
                                </div>
                                <div className="flip-box-back">
                                    <h2>Lucus Hoehn</h2>
                                    <p>Founder and CEO</p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front profile two">
                                </div>
                                <div className="flip-box-back">
                                    <h2>Rebecca Marsh</h2>
                                    <p>CFO</p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front profile three">
                                </div>
                                <div className="flip-box-back">
                                    <h2>Sales Person</h2>
                                    <p>Please click <label id="salesperson" htmlFor="start">here</label>, answer a few questions and a sales person will get back to you with a free estimate.</p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
