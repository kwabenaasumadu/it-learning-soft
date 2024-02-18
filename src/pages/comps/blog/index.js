import React from "react";
import styles from "../../../styles/blog.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerFirstHeader}>
          <p>Our Latest News From Our Blog</p>
        </div>

        <div className={styles.containerSecondHeader}>
          <h1>Latest News From Blog</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.items}>

            <div className={styles.item}>
              <div className={styles.itemDate}>
                <p>Jan 24, 2024</p>
              </div>

              <div className={styles.itemTitle}>
                <h1>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </h1>
              </div>

              <div className={styles.itemAction}>
                <p>Read More</p>
              </div>
            </div>


            <div className={styles.item}>
              <div className={styles.itemDate}>
                <p>Jan 24, 2024</p>
              </div>

              <div className={styles.itemTitle}>
                <h1>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </h1>
              </div>

              <div className={styles.itemAction}>
                <p>Read More</p>
              </div>
            </div>


            <div className={styles.item}>
              <div className={styles.itemDate}>
                <p>Jan 24, 2024</p>
              </div>

              <div className={styles.itemTitle}>
                <h1>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </h1>
              </div>

              <div className={styles.itemAction}>
                <p>Read More</p>
              </div>
            </div>


            

          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
