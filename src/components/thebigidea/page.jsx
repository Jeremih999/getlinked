import React from "react";
import styles from "./page.module.css";

function TheBigIdea() {
    return (
        <div className={styles.container} id="overview">
            <div className={styles.imageContainer}>
                {/* <h2 className={styles.titleImg}>The Big <br /> Idea!</h2> */}
                <img src="/the big idea.png" alt="illustration" className={styles.mainImg} />
                <img src="/arrow.png" alt="illustration" className={styles.arrow} />
                <img src="/sata gra.png" alt="illustration" className={styles.sata} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>Introduction to getlinked <br /> <span className={styles.purple}>tech Hackathon 1.0</span></h1>
                <p className={styles.para}> Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about! </p>
            </div>
        </div>
    )
}

export default TheBigIdea