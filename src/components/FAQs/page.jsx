import React from "react";
import styles from "./page.module.css";


function FAQs() {
    return (
        <div className={styles.container} id="faqs">
            <div className={styles.imageContainer}>
                {/* <h2 className={styles.titleImg}>The Big <br /> Idea!</h2> */}
                <img src="/tots.png" alt="illustration" className={styles.mainImg} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg2} />
                <img src="/q.png" alt="illustration" className={styles.q} />
                <img src="/qq.png" alt="illustration" className={styles.qq} />
                <img src="/qq.png" alt="illustration" className={styles.qqq} />
                <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} />
                <img src="/star pu.png" alt="illustration" className={styles.star3} />
                <img src="/star pu.png" alt="illustration" className={styles.star4} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>Frequently Asked <br /> <span className={styles.purple}>Questions</span></h1>
                <p className={styles.para}>We got answers to the questions that you might
                    want to ask about getlinked Hackathon 1.0</p>
                <div className={styles.FAQs}>
                    <div className={styles.FAQ}>
                    Can I work on a project I started before the hackathon? <span className={styles.purple}>+</span>
                    </div>
                    <div className={styles.FAQ}>
                    What happens if I need help during the hackathon? <span className={styles.purple}>+</span>
                    </div>
                    <div className={styles.FAQ}>
                    What happens if I don't have an idea for a project? <span className={styles.purple}>+</span>
                    </div>
                    <div className={styles.FAQ}>
                    Can I join a team or do I have to come with one? <span className={styles.purple}>+</span>
                    </div>
                    <div className={styles.FAQ}>
                    What happens after the hackathon ends <span className={styles.purple}>+</span>
                    </div>
                    <div className={styles.FAQ}>
                    Can I work on a project I started before the hackathon? <span className={styles.purple}>+</span>
                    </div>
                </div>

                {/* <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} /> */}
                <img src="/purple.png" alt="illustration" className={styles.purpleImg} />

            </div>
        </div>
    )
}


export default FAQs