import React from "react";
import styles from "../../../../styles/python.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Python Course</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h1>Introduction To Python</h1>
            </div>

            <div className={styles.itemDescription}>
              <p>
                Python is a high-level, interpreted programming language known
                for its simplicity and readability. It was created by Guido van
                Rossum and first released in 1991. Python is widely used in
                various domains such as web development, data science,
                artificial intelligence, scientific computing, and more.
              </p>
            </div>

            <div className={styles.itemAction}>
              <p>Want to Learn More</p>
              <h1>Click To Download</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
