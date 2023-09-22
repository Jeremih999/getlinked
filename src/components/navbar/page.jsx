import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "../Button/page";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1>get<span className={styles.purple}>linked</span></h1>
                <div className={styles.newDiv}>
                     <div className={styles.linksContainer}>
                    <Link href={"#"} className={styles.links}>Timeline</Link>
                    <Link href={"#"} className={styles.links}>Overview</Link>
                    <Link href={"#"} className={styles.links}>FAQs</Link>
                    <Link href={"#"} className={styles.links}>Contact</Link>

                    
                </div>
                <div className={styles.Button}>
                    <Button url={"#"} text={"Register"} />
                </div>
                </div>
               
            </nav>
        </div>
    )
}

export default Navbar