import React from "react";
import styles from "../../../styles/user_feedback.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Your Feedback </h1>
        </div>

        <div className={styles.inputFields}>
          <div className={styles.firstFields}>
            <div className={styles.field}>
              <span>Name</span>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className={styles.field}>
              <span>Email</span>
              <input type="text" placeholder="Your Email" />
            </div>
          </div>

          <div className={styles.secondField}>
            <span>Message</span>
            <input placeholder="message" />
          </div>

          <div className={styles.submitBtn}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
