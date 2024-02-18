import React from "react";
import styles from "../../../styles/firstheader.module.css";
import Image from "next/image";
import Person2 from "@mui/icons-material/Person2";
import Logout from "@mui/icons-material/LogoutOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twittter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.leftItems}>
            <div className={styles.items}>
              <FacebookIcon className={styles.icon} />
              <Twittter className={styles.icon} />
              <LinkedIn className={styles.icon} />
              <GoogleIcon className={styles.icon} />
            </div>
          </div>

          <div className={styles.middleItems}>
            <div className={styles.items}>
              <p>needhelp@gmail.com</p>
              <p>+233 597063145</p>
            </div>
          </div>

          <div className={styles.rightItems}>
            <div className={styles.items}>
              <div className={styles.item}>
                <Person2 className={styles.icon}/>
                <p>Profile</p>
              </div>
              <div className={styles.item}>
                <Logout className={styles.icon} />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
