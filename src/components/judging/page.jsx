import React from "react";
import styles from "./page.module.css";
import Button from "../Button/page";

function Judging() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/Ellipse.png" alt="illustration" className={styles.ellipse} />
                {/* <h2 className={styles.titleImg}>The Big <br /> Idea!</h2> */}
                <img src="/rules.png" alt="illustration" className={styles.mainImg} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg2} />
                <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} />
                <img src="/sata gra.png" alt="illustration" className={styles.sata} />

            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>Judging criteria <br /> <span className={styles.purple}>Key attributes</span></h1>
                <p className={styles.para}>
                    <span className={styles.purple}>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel
                    way or introduces innovative features.
                </p>

                <p className={styles.para}>
                    <span className={styles.purple}>Functionality: </span>Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues? Judges would
                    consider the completeness and robustness of the solution.
                </p>

                <p className={styles.para}>
                    <span className={styles.purple}>Impact and Relevance: </span>Determine the potential impact of the solution
                    in the real world. Does it address a significant problem, and is it relevant
                    to the target audience? Judges would assess the potential social,
                    economic, or environmental benefits.
                </p>

                <p className={styles.para}>
                    <span className={styles.purple}>Technical Complexity: </span>Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of advanced
                    technologies or algorithms, and the scalability of the solution.</p>

                <p className={styles.para}>
                    <span className={styles.purple}>Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered
                    to the rules and guidelines of the hackathon, including deadlines, use of
                    specific technologies or APIs, and any other competition-specific requirements.
                </p>

                <div className={styles.button}>
                    <Button url={"#"} text={"Read More"} />
                </div>

                
                <img src="/purple.png" alt="illustration" className={styles.purpleImg} />
                <img src="/purple.png" alt="illustration" className={styles.purpleImg3} />

            </div>
        </div>
    )
}

export default Judging