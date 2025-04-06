"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

export default function EstimateForm() {

    const searchParams = useSearchParams()
    const [progressBar, setProgressBar] = useState("25%")

    const openForm = searchParams.has("open_form")

    function moveProgress(percentage: string) {
        setProgressBar(percentage)
    }


    // useEffect(() => {


    // }, []);

    return (
        <>
            {
                openForm ? (
                    <input id="start" type="checkbox" defaultChecked />
                ) : (
                    <input id="start" type="checkbox" />
                )
            }

            <div className="wrapper_mobile">
                <div className="progress_bar" />
            </div>
            <div id="service-form-parent">
                <form id="service-form">
                    <input type="hidden" name="progress_width" value="" />
                    <label id="close-form" htmlFor="start">
                        <div className="close-form-x" />
                    </label>

                    <input type="hidden" name="name" value="" />
                    <input type="hidden" name="email" value="" />
                    <input type="hidden" name="tel" value="" />
                    <input type="hidden" name="interest" value="" />
                    <div className="wait"></div>

                    <fieldset style={{ display: progressBar == "25%" ? "block" : "none" }}>
                        <div className="input-label">
                            <input type="text" name="name" placeholder="Full name*" className="form-inputs" required />
                            <label htmlFor="name">Full name</label>
                        </div>
                        <div className="input-label">
                            <input type="email" name="email" placeholder="Email*" className="form-inputs" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-label">
                            <input type="tel" name="tel" placeholder="Phone number*" className="form-inputs" required />
                            <label htmlFor="tel">Phone number</label>
                        </div>
                        <div className="wrap">
                            <input id="first-btn" type="submit" value="Send It" className="btn-copy"
                                onClick={() => moveProgress("50%")}
                            />
                        </div>
                    </fieldset>

                    <fieldset style={{ display: progressBar == "50%" ? "block" : "none" }}>
                        <div className="p-wrap">
                            <p>What are your interests in reaching out to us?</p>
                        </div>
                        <div className="wrap">
                            <div className="interest-table">
                                <div><input type="checkbox" name="interest" value="Rooftop Solar" />Rooftop Solar</div>
                                <div><input type="checkbox" name="interest" value="Ground Mount Solar" />Ground Mount Solar</div>
                                <div><input type="checkbox" name="interest" value="Battery Backup Systems" />Battery Backup Systems</div>
                                <div><input type="checkbox" name="interest" value="Off Grid" />Off Grid</div>
                                <div><input type="checkbox" name="interest" value="Employment" />Employment</div>
                            </div>
                        </div>
                        <div className="wrap">
                            <input type="submit" value="Send My Interests" name="submit" className="btn-copy"
                                onClick={() => moveProgress("75%")}
                            />
                        </div>
                    </fieldset>

                    <fieldset style={{ display: progressBar == "75%" ? "block" : "none" }}>
                        <div className="p-wrap">
                            <p>Anything else before we meet you?</p>
                        </div>
                        <textarea id="extra-email" name="message" placeholder="Feel free to say or ask anything..."></textarea>
                        <div className="button-box">
                            <div className="wrap">
                                <input type="submit" value="No Thanks" name="submit" className="btn-copy"
                                    onClick={() => moveProgress("100%")}
                                />
                            </div>
                            <div className="wrap">
                                <input type="submit" value="Yes, Send!" name="submit" className="btn-copy"
                                    onClick={() => moveProgress("100%")}
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset style={{ display: progressBar == "100%" ? "block" : "none" }}>
                        <div className="thanks">
                            <h2>Thank You!</h2>
                            <h3>We look forward to meeting you.</h3>
                        </div>
                    </fieldset>

                    {/* <style>{progressAnimation}</style> */}
                    <div className="wrapper">
                        <div className="progress_bar" style={{
                            width: progressBar,
                            //animation: "1s linear progress"
                            transition: `width 1s ease`
                        }} />
                    </div>
                </form>
            </div>
        </>
    )
}
