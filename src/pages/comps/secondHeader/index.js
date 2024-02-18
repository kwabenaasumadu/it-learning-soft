import React from "react";
import styles from "../../../styles/secondHeader.module.css";
import ShieldIcon from "@mui/icons-material/Shield";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.leftItems}>
            <div className={styles.items}>
              <ShieldIcon className={styles.icon} />
              <h1>LearnWithCod</h1>
            </div>
          </div>

          <div className={styles.middleItems}>
            <div className={styles.items}>
              <p>Home</p>
              <p>About</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>

          <div className={styles.rightItems}>
            <div className={styles.items}>
              <div className={styles.item}>
                <input placeholder="search courses"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
