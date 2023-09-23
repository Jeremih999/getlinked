import React from "react";
import styles from "./page.module.css";
import Navbar3 from "@/components/navbar3/page";
import Button from "@/components/Button/page";

function Register() {
    return (
        <>
            <Navbar3 />
            <div className={styles.container}>
                <img src="/purple.png" alt="imole" className={styles.purpleImg1} />
                <img src="/purple.png" alt="imole" className={styles.purpleImg2} />
                {/*  <img src="/star.png" alt="imole" className={styles.star1} /> 
            <img src="/star pu.png" alt="imole" className={styles.star2} /> 
            <img src="/star (1).png" alt="imole" className={styles.star3} /> 
            <img src="/star pu.png" alt="imole" className={styles.star4} />  */}
                <div className={styles.textContainer}>
                    <img src="/registermann.png" alt="illustration" className={styles.mainImg} />
                </div>
                <div className={styles.formContainer}>
                    <h1 className={styles.reg}>Register</h1>
                    <div className={styles.emojiContainer}>
                        <small className={styles.small}>Be part of this movement! <span className={styles.purple}>...............</span></small>
                        <img src="/emoji.png" alt="illustration" className={styles.emoji1} />
                        <img src="/emojii.png" alt="illustration" className={styles.emoji2} />
                    </div>
                    <h1 className={styles.h1}>CREATE YOUR ACCOUNT</h1>
                    <form>
                        <div className={styles.inputs}>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Name</label>
                                <input type="text" placeholder="Enter the name of your group" className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.extra}>
                            <p className={styles.purpleT}>Please review your registration details before submitting</p>
                            <div className={styles.check}>
                                <input type="checkbox" />
                                <p>I agreed with the event terms and conditions  and privacy policy</p>
                            </div>
                        </div>

                        <button className={styles.butt}>Register Now</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Register