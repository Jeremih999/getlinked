import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <img src="/star pu.png" alt="illustration" className={styles.star2} />
                <img src="/star.png" alt="illustration" className={styles.star5} />
                <img src="/star.png" alt="illustration" className={styles.star6} />
                <img src="/star (1).png" alt="illustration" className={styles.star7} />
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.logo}><span className={styles.purple}>get</span>linked</li>
                        <li className={styles.details} id={styles.mar}>Getlinked Tech Hackathon is a technology innovation program<br />
                            established by a group of organizations with the aim of showcasing<br />
                            young and talented individuals in the field of technology</li>
                        <li className={styles.details}>Terms of Use<span className={styles.purple}>   |   </span>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ull}>
                        <li className={styles.head}>Useful Links</li>
                        <li className={styles.details}>Overview</li>
                        <li className={styles.details}>Timeline</li>
                        <li className={styles.details}>FAQs</li>
                        <li className={styles.details}>Register</li>
                        <li className={styles.details} id={styles.socials}>
                            <p className={styles.purple}>Follow Us</p>

                            <div className={styles.socialsContainer}>

                                <div className={styles.socCont}>
                                    <Image src="/facebook.png" alt="social media" fill={true} className={styles.socialImage} />
                                </div>
                                <div className={styles.socCont}>
                                    <Image src="/instagram.png" alt="social media" fill={true} className={styles.socialImage} />
                                </div>
                                <div className={styles.socCont}>
                                    <Image src="/linkedin.png" alt="social media" fill={true} className={styles.socialImage} />
                                </div>
                                <div className={styles.socCont}>
                                    <Image src="/twitter.png" alt="social media" fill={true} className={styles.socialImage} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ull}>
                        <li className={styles.head}>Contact Us</li>
                        <li className={styles.details}>+234 6707653444</li>
                        <li className={styles.details}>27,Alara Street
                            Yaba 100012
                            Lagos State</li>
                    </ul>
                </div>
            </div>
            <div className={styles.rights}>
                <p className={styles.details}>All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>

    )
}

export default Footer