import React from "react";
import styles from "../../../styles/footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twittter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1Items}>
          <div className={styles.item1}>
            <span>Stay Updated</span>

            <div className={styles.item1Input}>
              <input placeholder="email" />
              <button>Subscribe Now</button>
            </div>
          </div>

          <div className={styles.item2}>
            <FacebookIcon className={styles.icon} />
            <Twittter className={styles.icon} />
            <LinkedIn className={styles.icon} />
            <GoogleIcon className={styles.icon} />
          </div>
        </div>

        <div className={styles.lastSection}>
          <p>
            Copyright ©2024 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
