"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
// import { usePathname, useParams } from "next/navigation"

import Head from 'next/head'
import Header from "@/components/Header";

import AnimatedBanner from "@/components/AnimatedBanner";
import EstimateForm from "@/components/EstimateForm";
import Footer from "@/components/Footer";

export default function Home() {
  // const [fragment, setFragment] = useState("")
  // const pathname = usePathname()
  // const params = useParams();

  // useEffect(() => {
  //   setFragment(window.location.hash)

  //   if (fragment == "#open_form") {
  //     alert("form")
  //   }

  // }, [params]);

  return (
    <>
      <Head>
        <title>HyTech Energy | Solar Installations & Financing Broker</title>
      </Head>
      {/* <input type="checkbox" id="parent" defaultChecked /> */}
      <Header />

      <AnimatedBanner />

      <EstimateForm/>

      <div id="mission-head">
        <h3 id="headline">Welcome</h3>
        <p id="mission">Our mission is simple, provide quality and affordable solar energy solutions to homes in
          Fresno. Our high hope is to open satellite locations in the future and keep our home base for business
          here.</p>
      </div>

      <Footer />
    </>
  );
}
