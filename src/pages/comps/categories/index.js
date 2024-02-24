import React, { useState, useEffect } from "react";
import styles from "../../../styles/categories.module.css";
import List from "@mui/icons-material/List";
import BookIcon from "@mui/icons-material/Book";
import Web from "@mui/icons-material/Web";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const navigateToPython = () => {
    router.push("/comps/courses/python/");
    setIsLoading(true);
  };

  const navigateToProgramming = () => {
    router.push("/comps/courses/programming/");
    setIsLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
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
                <BookIcon className={styles.icon} />
              </div>

              <div className={styles.itemHeader}>
                <h1>Introduction To Programming</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Introduction to programmingWhat is programming? Programming is
                  writing computer...
                </p>
              </div>

              <div className={styles.itemAction}>
                <p onClick={navigateToProgramming}>Learn More </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <List className={styles.icon} />
              </div>

              <div className={styles.itemHeader} onClick={navigateToPython}>
                <h1>Learn Python</h1>
              </div>

              <div className={styles.itemDes}>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
              </div>

              <div className={styles.itemAction}>
                <p onClick={navigateToPython}>Learn More </p>
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
                <h1>JavaScript</h1>
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
                <h1>HTML</h1>
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
                <h1>CSS</h1>
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
