import React from "react";
import styles from "./page.module.css";

function Timeline() {
    return (
        <div class={styles.timeline} id="timeline">
          <div className={styles.header}>
            <h2 class={styles.timelineTitle}>Timeline</h2>
            <div className={styles.para}>
                 <p className={styles.contents}>Here is the breakdown of the time we anticipate </p>
            <p className={styles.contents}> using for the upcoming event.</p>
            </div>
           
          </div>
                <img src="/star.png" alt="illustration" className={styles.star1} />
                <img src="/star (1).png" alt="illustration" className={styles.star2} />
                <img src="/star pu.png" alt="illustration" className={styles.star3} />
            <div class={styles.timelineEvents}>
                <div class={styles.timelineEvent}>
                    <div class={styles.timelineEventContent} id={styles.end}>
                        <h3 class={styles.timelineEventHeading} >Hackathon Announcement</h3>
                         <p class={styles.contents} >The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>

                    <div className={styles.serial}>
                         <div className={styles.serialNo}>1</div>
                    </div>
                    <div class={styles.timelineEventDate}>November 18, 2023</div>
                </div>
                <div class={styles.timelineEvent} id={styles.rev}>
                    <div class={styles.timelineEventDate} id={styles.end}>November 18, 2023</div>
                    
                   
                    <div className={styles.serial}>
                         <div className={styles.serialNo}>2</div>
                    </div>
                    <div class={styles.timelineEventContent} id={styles.start}>
                        <h3 class={styles.timelineEventHeading}>Teams Registration begins</h3>
                        <p class={styles.contents}>Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                    </div>
                </div>
                <div class={styles.timelineEvent}>
                    <div class={styles.timelineEventContent} id={styles.end}>
                        <h3 class={styles.timelineEventHeading}>Teams Registration Ends</h3>
                        <p class={styles.contents} >Interested Participants are no longer Allowed to register</p>
                    </div>
                    <div className={styles.serial}>
                         <div className={styles.serialNo}>3</div>
                    </div>
                    <div class={styles.timelineEventDate}>November 18, 2023</div>
                </div>
                <div class={styles.timelineEvent} id={styles.rev}>
                    <div class={styles.timelineEventDate} id={styles.end}>November 18, 2023</div>
                    <div className={styles.serial}>
                         <div className={styles.serialNo}>4</div>
                    </div>
                    <div class={styles.timelineEventContent}>
                        <h3 class={styles.timelineEventHeading}>Announcement of the accepted teams and ideas</h3>
                        <p class={styles.contents}>All teams whom Idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                    </div>
                </div>
                <div class={styles.timelineEvent}>
                    <div class={styles.timelineEventContent} id={styles.end}>
                        <h3 class={styles.timelineEventHeading}>Getlinked Hackathon 1.0 Offically Begins</h3>
                        <p class={styles.contents}>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                    </div>

                    <div className={styles.serial}>
                         <div className={styles.serialNo}>5</div>
                    </div>
                    <div class={styles.timelineEventDate}>November 18, 2023</div>
                </div>
                <div class={styles.timelineEvent} id={styles.rev}>
                    <div class={styles.timelineEventDate} id={styles.end}>November 18, 2023</div>
                    <div className={styles.serial}>
                         <div className={styles.serialNo}>6</div>
                    </div>
                    <div class={styles.timelineEventContent}>
                        <h3 class={styles.timelineEventHeading}>Demo Day</h3>
                        <p class={styles.contents}>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Timeline