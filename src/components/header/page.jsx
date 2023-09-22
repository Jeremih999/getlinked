import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../Button/page";

function Header() {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.container}>
        <div className={styles.textSection}>
          <div className={styles.title}>
            <h1>getlinked Tech <br /> Hackacthon <span className={styles.purple}>1.0</span></h1>
              <img src="/bulb.png" alt="purple flare" fill={true} className={styles.imageBulb} />
              <img src="/chain.png" alt="purple flare" fill={true} className={styles.imageChain} />
              <img src="/blast.png" alt="purple flare" fill={true} className={styles.imageBlast} />
          </div>
          <p className={styles.subText}>Participate in getlinked tech Hackathon 2023 stand <br />a chance to win a Big prize</p>
          <Button url={"#"} text={"Register"} />

          <div className={styles.timer}>
            <h1>00<sub className={styles.subscript}>H</sub></h1>
            <h1>00<sub className={styles.subscript}>M</sub></h1>
            <h1>00<sub className={styles.subscript}>S</sub></h1>
          </div>
          <img src="/star.png" alt="purple flare" fill={true} className={styles.imageStar1} />
          <img src="/star (1).png" alt="purple flare" fill={true} className={styles.imageStar2} />
          <img src="/star (1).png" alt="purple flare" fill={true} className={styles.imageStar3} />
        </div>
        <div className={styles.headerImage}>
          <img src="/mann.png" alt="purple flare" fill={true} className={styles.image} />
          <img src="/purpleo.png" alt="purple flare" fill={true} className={styles.imagePurple} />
          <img src="/head.png" alt="purple flare" fill={true} className={styles.imageHead} />
        </div>
      </div>


      <div className={styles.imageContainer}>
        <img src="/purpleo.png" alt="purple flare" fill={true} className={styles.image} />
      </div>
    </div>
  )
}

export default Header