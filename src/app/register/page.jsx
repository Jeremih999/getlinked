import React from "react";
import styles from "./page.module.css";
import Navbar3 from "@/components/navbar3/page";
import Button from "@/components/Button/page";
import SuccessMsg from "@/components/successMsg/page";

function Register() {
    return (
         <div className={styles.main}>
             <Navbar3 />
            <SuccessMsg />
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
                                <label className={styles.label}>Phone Number</label>
                                <input type="number" placeholder="Enter your Phone number" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Email</label>
                                <input type="email" placeholder="Enter your email" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Project topic</label>
                                <input type="text" placeholder="Enter the topic of your project" className={styles.input} />
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Category</label>
                                {/* <input type="text" placeholder="Enter the name of your group" className={styles.input} /> */}
                                <select className={styles.input}>
                                    <option className={styles.option}>select category</option>
                                    <option className={styles.option}>Frontend Website</option>
                                    <option className={styles.option}>Api</option>
                                    <option className={styles.option}>Ui/Ux</option>
                                    <option className={styles.option}>DevOps</option>
                                    <option className={styles.option}>Full stack</option>
                                </select>
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Size</label>
                                <select className={styles.input}>
                                    <option className={styles.option}>select</option>
                                    <option className={styles.option}>1-5</option>
                                    <option className={styles.option}>6-10</option>
                                    <option className={styles.option}>11-20</option>
                                </select>
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
         </div>
           

    )
}

export default Register