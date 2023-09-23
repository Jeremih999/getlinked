import React from "react";
import styles from "./page.module.css";
import Button from "../Button/page";


function Privacy() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/shield.png" alt="illustration" className={styles.shield} />
                <img src="/padlock.png" alt="illustration" className={styles.padlock} />

                <img src="/star pu.png" alt="illustration" className={styles.star1} />
                <img src="/star pu.png" alt="illustration" className={styles.star2} />
                <img src="/star.png" alt="illustration" className={styles.star5} />
                <img src="/star.png" alt="illustration" className={styles.star6} />
                <img src="/star (1).png" alt="illustration" className={styles.star7} />

            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>Privacy Policy and <br /> <span className={styles.purple}>Terms</span></h1>
                <p className={styles.subTitle}>Last updated on September 12, 2023</p>
                <p className={styles.para}>Below are our privacy & policy, which outline a lot of goodies. <br />
                    it’s our aim to always take of our participant</p>
                    <img src="/star (1).png" alt="illustration" className={styles.star3} />
                <div className={styles.texting}>
                    <div className={styles.first}>
                        <p className={styles.firstText}>At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose,
                            and safeguard your data when you participate in our tech
                            hackathon event. By participating in our event, you consent
                            to the practices described in this policy.</p>
                    </div>
                <img src="/star pu.png" alt="illustration" className={styles.star4} />

                    <div className={styles.sec}>
                        <div><h1><span className={styles.purpleText}>Licensing Policy</span></h1>
                        <p className={styles.firstText}>Here are terms of our Standard License:</p></div>
                        

                        <p className={styles.firstText}>The Standard License grants you a non-exclusive right to
                            navigate and register for our event</p>
                        <p className={styles.firstText}>You are licensed to use the item available at any free source
                            sites, for your project developement</p>
                            <div className={styles.but}><Button url={"#"} text={"Read More"} /></div>
                            
                    </div>
                </div>

                {/* <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} /> */}
                {/* <img src="/purple.png" alt="illustration" className={styles.purpleImg} /> */}

            </div>
        </div>
    )
}


export default Privacy