import React from "react";
import styles from "./page.module.css";

function Sponsors() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.mainHead}>Partners and Sponsors</h1>
                <div className={styles.para}>
                     <p className={styles.subHead}>Getlinked Hackathon 1.0 is honored to have the following major</p>
                <p className={styles.subHead}>
                    companies as its partners and sponsors</p>
                </div>
               
            </div>

            <img src="/star pu.png" alt="illustration" className={styles.star1} />
            <img src="/star pu.png" alt="illustration" className={styles.star2} />
            <img src="/star.png" alt="illustration" className={styles.star5} />
            <img src="/purple.png" alt="illustration" className={styles.purpleImg} />
            <img src="/purple.png" alt="illustration" className={styles.purpleImg2} />

            <div className={styles.sponsorsContainer}>
                <div className={styles.first}>
                    <img src="/Liberty.png" alt="logo" id={styles.logo} />
                </div>
                <div className={styles.second}>
                    <img src="/Paybox.png" alt="logo"  id={styles.logo}/>
                </div>
                <div className={styles.third}>
                    <img src="/Winwise.png" alt="logo" id={styles.logo} />
                </div>
                <div className={styles.fourth}>
                    <img src="/wisper.png" alt="logo" id={styles.logo} />
                </div>
                <div className={styles.fifth}>
                    <img src="/Vizual Plus.png" alt="logo" id={styles.logo} />
                </div>
                <div className={styles.sixth}>
                    <img src="/Liberty company.png" alt="logo" id={styles.logo} />
                </div>
            </div>
        </div>
    )
}

export default Sponsors