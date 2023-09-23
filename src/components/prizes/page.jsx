import React from "react";
import styles from "./page.module.css";
import Button from "../Button/page";

function Prizes() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            
                <img src="/trophy.png" alt="illustration" className={styles.trophy} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg3} />
                {/* <h2 className={styles.titleImg}>The Big <br /> Idea!</h2> */}
            </div>
                <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star.png" alt="illustration" className={styles.star4} />
                <img src="/star.png" alt="illustration" className={styles.star5} />
                <img src="/star.png" alt="illustration" className={styles.star6} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} />
                <img src="/star pu.png" alt="illustration" className={styles.star3} />
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>Prizes and <br /> <span className={styles.purple}>Rewards</span></h1>
                <p className={styles.para}>
                    Highlight of the prizes or rewards for the winners and participants
                </p>

                <div className={styles.medalContainer}>
                    <div className={styles.silver}>
                    <img src="/silver_medal 1.png" alt="illustration" className={styles.silverMedal} />
                     <h1 className={styles.position}>2nd</h1>
                     <h2 className={styles.run}>Runner</h2>
                     <h1 className={styles.amount}>300,000</h1>
                    </div>
                    <div className={styles.gold}>
                    <img src="/gold_medal 1.png" alt="illustration" className={styles.golden} />
                    <h1 className={styles.position}>1st</h1>
                     <h2 className={styles.run}>Runner</h2>
                     <h1 className={styles.amountFirst}>400,000</h1>
                    </div>
                    <div className={styles.bronze}>
                    <img src="/bronze_medal 1.png" alt="illustration" className={styles.bronzeMedal} />
                    <h1 className={styles.position}>3rd</h1>
                     <h2 className={styles.run}>Runner</h2>
                     <h1 className={styles.amount}>150,000</h1>
                    </div>
                </div>                
                {/* <img src="/purple.png" alt="illustration" className={styles.purpleImg} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg3} /> */}

            </div>
        </div>
    )
}

export default Prizes