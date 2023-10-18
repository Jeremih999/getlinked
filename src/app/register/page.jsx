"use client"

import React, { use, useEffect, useState } from "react";
import styles from "./page.module.css";
import Navbar3 from "@/components/navbar3/page";
import Button from "@/components/Button/page";
import SuccessMsg from "@/components/successMsg/page";





function  Register() {
    const [err1, setErr1] = useState(false);
    const [data, setData] = useState([]);


    const baseUrl = "https://backend.getlinked.ai"
    const getCat = async ()=>{
        let response = await fetch(`${baseUrl}/hackathon/categories-list`)
        let res = await response.json()
        setData(res);
    }
  
    useEffect(() => {
        getCat()
    },[])

    

    const [err, setErr] = useState(false);
    const [success, setSuccess ] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault() 

        const team_name = e.target[0].value;
        const  phone_number = e.target[1].value;
        const email = e.target[2].value;
        const project_topic = e.target[3].value;
        const cat = e.target[4].value;
        const groupSize = e.target[5].value;

        const category = cat * 1;
        const group_size = groupSize * 1;

 
        try {
            const res= await fetch(`${baseUrl}/hackathon/registration`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email,
                    phone_number,
                    team_name,
                    group_size,
                    project_topic,
                    category,
                    "privacy_poclicy_accepted": true
                }),
            })

            console.log(phone_number, group_size, category)
            res.status == setSuccess(true)
        } catch (error) {
            setErr(true)
        }
    }
  
    
    return (
         <div className={styles.main}>
             <Navbar3 />
            {/* <SuccessMsg /> */}
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
                    <form onSubmit={handleSubmit}>
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
                                    {data.map((data)=>(
                                        <option className={styles.option} key={data.id} value={data.id}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.formControl}>
                                <label className={styles.label}>Team's Size</label>
                                <select className={styles.input}>
                                    <option className={styles.option}>select</option>
                                    <option className={styles.option} value={5}>1-5</option>
                                    <option className={styles.option} value={10}>6-10</option>
                                    <option className={styles.option} value={20}>11-20</option>
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