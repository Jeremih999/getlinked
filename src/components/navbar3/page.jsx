"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "../Button/page";

function Navbar3() {
    const [nav, setNav] = useState(false);

    function openNav() {
        setNav(true)
    }

    function closeNav() {
        setNav(false)
    }
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1 onClick={closeNav}>get<span className={styles.purple}>linked</span></h1>
                <div className={nav ? styles.newDivActive :styles.newDiv} id={styles.navStyle}>
                    <div className={nav ? styles.linksContainerActive :styles.linksContainer}>
                        <Link href={"#timeline"} className={styles.links} onClick={closeNav}>Timeline</Link>
                        <Link href={"#overview"} className={styles.links} onClick={closeNav}>Overview</Link>
                        <Link href={"#faqs"} className={styles.links} onClick={closeNav}>FAQs</Link>
                        <Link href={"/contact"} className={styles.links} onClick={closeNav} id={styles.special}>Contact</Link>


                    </div>
                    <div className={styles.Button}>
                        <div className={styles.buttonElem}>
                            <Link href={"/register"}><button className={styles.buttonEl} onClick={closeNav}>Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.actionBtns}>
                    {nav ? <li><img src="/close.png" alt="close" onClick={closeNav} /></li> : <li><img src="/open.png" alt="open" onClick={openNav} /></li>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar3