"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
// import Navbar from "@/components/navbar/page";
import Button from "@/components/Button/page";
import Navbar2 from "@/components/navbar2/page";
import Image from "next/image";
// import Navbar3 from "@/components/navbar3/page";

function Contact() {
    const [success, setSuccess] = useState(false)
    const [err, setErr] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault() 

        console.log("it's workin")
        const first_name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

 
        try {
            const res= await fetch(`${baseUrl}/hackathon/registration`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email:"sample@eexample.com",
                    phone_number:"0903322445533",
                    first_name: "Space Explore",
                    message: "I need further info"
                }),
            })

            console.log("it worked")
            res.status == setSuccess(true)
        } catch (error) {
            setErr(true)
        }
    }
    return (
        <>
            <Navbar2 />
            <div className={styles.container}>
                <img src="/purple.png" alt="imole" className={styles.purpleImg1} />
                <img src="/purple.png" alt="imole" className={styles.purpleImg2} />
                <img src="/star.png" alt="imole" className={styles.star1} />
                <img src="/star pu.png" alt="imole" className={styles.star2} />
                <img src="/star (1).png" alt="imole" className={styles.star3} />
                <img src="/star pu.png" alt="imole" className={styles.star4} />
                <div className={styles.textContainer}>
                    <h1 id={styles.purple} className={styles.h1}>Get in Touch</h1>
                    <p className={styles.p}>Contact <br />Information</p>
                    <p className={styles.p}>27,Alara Street <br />
                        Yaba 100012 <br />
                        Lagos State</p>
                    <p className={styles.p}>Call Us : 07067981819</p>
                    <p className={styles.p}>we are open from Monday-Friday <br />
                        08:00am - 05:00pm</p>

                    <div className={styles.socials}>
                        <p id={styles.purple} className={styles.p}>Share on</p>
                    </div>
                </div>
                <div className={styles.textContainer1}>
                    <h1 id={styles.purple} className={styles.h1}>Get in Touch</h1>
                    <p className={styles.p}>Contact Information</p>
                    <p className={styles.p}>27,Alara Street
                        Yaba 100012
                        Lagos State</p>
                    <p className={styles.p}>Call Us : 07067981819</p>
                    <p className={styles.p}>we are open from Monday-Friday
                        08:00am - 05:00pm</p>

                    <div className={styles.socials}>
                        <p id={styles.purple} className={styles.p}>Share on</p>
                        <div className={styles.socialsContainer}>

                            <div className={styles.socCont}>
                                <Image src="/facebook.png" alt="social media" fill={true} className={styles.socialImage} />
                            </div>
                            <div className={styles.socCont}>
                                <Image src="/instagram.png" alt="social media" fill={true} className={styles.socialImage} />
                            </div>
                            <div className={styles.socCont}>
                                <Image src="/linkedin.png" alt="social media" fill={true} className={styles.socialImage} />
                            </div>
                            <div className={styles.socCont}>
                                <Image src="/twitter.png" alt="social media" fill={true} className={styles.socialImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <h1 className={styles.formHeading}>Questions or need assistance?</h1>
                    <h1 className={styles.formHeading}>Let us know  about it!</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input type="text" placeholder="First Name" className={styles.input} />
                        <input type="email" placeholder="Mail" className={styles.input} />
                        <textarea cols={30} rows={5} placeholder="Message" className={styles.textArea}></textarea>
                        <button className={styles.button}>Submit</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Contact