import React from "react";
import styles from "./page.module.css";


function Rules() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {/* <h2 className={styles.titleImg}>The Big <br /> Idea!</h2> */}
                <img src="/lady.png" alt="illustration" className={styles.mainImg} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg2} />

            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>Rules and <br /> <span className={styles.purple}>Guidelines</span></h1>
                <p className={styles.para}> Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>

                <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg} />

            </div>
        </div>
    )
}

export default Rules