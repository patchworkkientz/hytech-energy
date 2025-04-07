'use client'
import Script from "next/script"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    return (
        <header>
            <Script
                src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"
                integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0"
                crossOrigin="anonymous"
            />
            <nav>
                <input type="checkbox" id="mobile-menu" />
                <label htmlFor="mobile-menu" id="bars"><i className="fas fa-bars"></i></label>
                <a href="/"><img src="/v2_logo.png" alt="" id="logo" /></a>
                <div id="phone-call-cont">
                    <a href="tel:+1-559-7797367"><span className="phone"><i
                        className="fas fa-phone fa-rotate-90"></i></span><span> 559-779-7367</span></a>
                </div>
                <ul id="menu">
                    <li>
                        <a href="/services" 
                            className={ pathname == "/services" ? "tab-selected" : "" }
                        ><span className="menu-items-icon"><i
                            className="fas fa-solar-panel"></i></span><span>Services</span></a>
                    </li>
                    <li>
                        <a href="/finance" 
                        className={ pathname == "/finance" ? "tab-selected" : "" }
                        ><span className="menu-items-icon"><i
                            className="fas fa-file-invoice-dollar"></i></span><span>Finance</span></a>
                    </li>
                    {/* <li>
                        <a href="/gallery" 
                        className={ pathname == "/gallery" ? "tab-selected" : "" }
                        ><span className="menu-items-icon"><i
                            className="fas fa-home"></i></span><span>Client
                                Gallery</span></a>
                    </li> */}
                    <li>
                        <a href="/renewables" 
                        className={ pathname == "/renewable-energy" ? "tab-selected" : "" }
                        ><span className="menu-items-icon"><i
                            className="fas fa-leaf"></i></span><span>Renewables</span></a>
                    </li>
                    <li>
                        <a href="/team" 
                        className={ pathname == "/team" ? "tab-selected" : "" }
                        ><span className="menu-items-icon"><i
                            className="fas fa-leaf"></i></span><span>Team</span></a>
                    </li>
                    <li>
                        <a href="/#mission" id="hide-menu"
                        ><span className="menu-items-icon"><i
                            className="fas fa-bullseye"></i></span><span>Mission</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
