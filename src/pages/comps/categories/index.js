import React from "react";
import styles from "../../../styles/categories.module.css";
import List from "@mui/icons-material/List";
import BookIcon from "@mui/icons-material/Book";
import Web from "@mui/icons-material/Web";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerFirstHeader}>
          <p>Popular Online Courses</p>
        </div>

        <div className={styles.containerSecondtHeader}>
          <h1>Let&apos;s Brows All Categories</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <List className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Web Design</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p>Read More </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <BookIcon className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Web Design</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p>Read More </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <Web className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Web Design</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p>Read More </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <List className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Web Design</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p>Read More </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <List className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Web Design</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p>Read More </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <List className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Web Design</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p>Read More </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerLastSection}>
          <h1>Find More Courses</h1>
        </div>
      </div>
    </>
  );
}

export default Index;
