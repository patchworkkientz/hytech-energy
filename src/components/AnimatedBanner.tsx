"use client"
import { useEffect } from "react";
import Script from "next/script";

export default function AnimatedBanner() {

    useEffect(() => {
        let banner = document.getElementById("banner")
        let duplicateBanner = document.getElementById("duplicate-banner")
        let style = document.createElement("style")
        let sheet = ""
        let angle = 0

        for (let i = 1; i < 21; i++) {
            sheet += `.sun-wrapper:nth-child(${i}) { transform-origin: center; transform: rotate(${angle}deg); }`
            angle += 18
        }
        style.innerHTML = sheet
        document.body.appendChild(style)

        var createdStyleTag = document.createElement("style");

        var content_width = window.getComputedStyle(
            document.querySelector('.our-mother-earth'), '::after'
        ).getPropertyValue('width');

        // from app.js -- not sure why it is written this way
        var keyFrames = ".our-mother-earth::after {\n" +
            "   animation: 8s linear 8s forwards text-ray-width;\n" +
            "   }\n" +
            "   @keyframes text-ray-width {\n" +
            "        0% {\n" +
            "            opacity: 0;\n" +
            "            width: 0;\n" +
            "        }\n" +
            "        100% {\n" +
            "            opacity: 1;\n" +
            "            width: A_DYNAMIC_VALUE;\n" +
            "        }\n" +
            "    };";

        createdStyleTag.innerText = keyFrames.replace(/A_DYNAMIC_VALUE/g, content_width);
        document.body.appendChild(createdStyleTag);

    }, []);

    return (
        <>
            {/* <Script src="/jquery.min.js" />
            <Script src="/app.js" /> */}
            <div id="banner-cont">
                <div id="banner">
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                    <div className="sun-wrapper set-one">
                        <div className="our-mother-earth"></div>
                    </div>
                </div>

                <div id="duplicate-banner-parent">
                    <div id="duplicate-banner">
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>
                        <div className="sun-wrapper set-two">
                            <div className="our-mother-earth"></div>
                        </div>

                        <div className="sun-wrapper" style={{ zIndex: 2 }}>
                            <label htmlFor="start" id="co-logo"></label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
