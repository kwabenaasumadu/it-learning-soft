import React from "react";
import styles from "../../../styles/feedback.module.css";
import Image from "next/image";
import StarRateIcon from "@mui/icons-material/StarRate";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Feedback</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div className={styles.itemPhoto}>
              <Image
                src="/showcase.png"
                width={100}
                height={100}
                alt="person_iamge"
                className={styles.itemPhotoImage}
              />
            </div>

            <div className={styles.itemMessage}>
              <p>
                Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht,
                sed do eiusmod tempor incidi. Sorem hpsum folor sixdsft amhtget,
                consectetur adipiscing eliht, sed do eiusmod tempor incidi.
              </p>
            </div>

            <div className={styles.itemStar}>
              <StarRateIcon className={styles.icon} />
              <StarRateIcon className={styles.icon} />
              <StarRateIcon className={styles.icon} />
              <StarRateIcon className={styles.icon} />
              <StarRateIcon className={styles.icon} />
              <StarRateIcon className={styles.icon} />
            </div>

            <div className={styles.itemName}>
              <h1>Kwabena Sakyi Asumadu</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
