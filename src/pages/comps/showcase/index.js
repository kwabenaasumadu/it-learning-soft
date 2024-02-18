import React from "react";
import styles from "../../../styles/showcase.module.css";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.leftItems}>
            <div className={styles.item}>
              <p>Popular Online Courses</p>
            </div>

            <div className={styles.item2}>
              <h1>The New Way To Learn Properly In With Us!</h1>
            </div>

            <div className={styles.item3}>
              <button>Get Started</button>
            </div>
          </div>

          <div className={styles.rightItems}>
            <Image
              src="/showcase.png"
              width={600}
              height={600}
              alt="showcase_image"
              className={styles.showcaseImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
