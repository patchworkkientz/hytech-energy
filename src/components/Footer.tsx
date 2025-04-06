'use client'
import Script from "next/script";
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()

    return (
        <>
            <Script src="/jquery.min.js" />
            <Script src="/app.js" />
            <a href="#" id="backtotop" role="button"><span><i className="fas fa-angle-up"></i></span></a>
            <footer>
                <ul id="footer-links">
                    <li>
                        <p><a href="/tos" style={{ borderBottom: pathname == "/tos" ? "1px dotted #000" : "none" }}>Terms of Use</a> | </p>
                    </li>
                    <li>
                        <p><a href="/privacy" style={{ borderBottom: pathname == "/privacy" ? "1px dotted #000" : "none" }}>Privacy Policy</a> | </p>
                    </li>
                    <li>
                        <p><a href="/licenses" style={{ borderBottom: pathname == "/licenses" ? "1px dotted #000" : "none" }}>License</a> | </p>
                    </li>
                    <li>
                        <p><a href="/sitemap" style={{ borderBottom: pathname == "/sitemap" ? "1px dotted #000" : "none" }}>Sitemap</a></p>
                    </li>
                </ul>
                <p id="copyright">© Copyright 2019 HyTech Energy, Inc. All rights reserved.</p>
            </footer>
        </>
    )
}
