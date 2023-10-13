import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../Button/page";

function SuccessMsg() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.imagesBox}>
                    <div className={styles.one}>
                        <div className={styles.imageOne}>
                            <Image src="/success-emoji.png" alt="icon" fill={true} className={styles.tick} />
                        </div>
                    </div>

                    <div className={styles.two}>
                        <div className={styles.imageTwo}>
                        <Image src="/success-man.png" alt="icon" fill={true} className={styles.man} />
                    </div>
                    </div>
                    
                </div>
                <div className={styles.dialogBox}>
                    <h1>Congratulations</h1>
                    <h1>You are successfully registered!</h1>
                    <p>Yes, it was easy and you did it</p>
                    <div className={styles.pp}>
                        <p>check your email for next step</p>
                    <div className={styles.emoji}>
                        <Image src="/wink.png" alt="icon" fill={true} className={styles.wink} />
                    </div>
                    </div>
                    
                    <Button url={"/"} text={"Back"} />
                </div>
            </div>
        </div>
    )
}

export default SuccessMsg