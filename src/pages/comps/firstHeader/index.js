import React from "react";
import styles from "../../../styles/firstheader.module.css";
import Image from "next/image";
import Person2 from "@mui/icons-material/Person2";
import Logout from "@mui/icons-material/LogoutOutlined";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.containerHeader}>
            <h1>Home</h1>
          </div>

          <div className={styles.secondContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.imageContainer}>
                <Person2 />{" "}
              </div>
              <div className={styles.nameContainer}>
                <h1>Welcome Kwabena Sakyi</h1>
              </div>
            </div>

            <div className={styles.rightContainer}>
              <Logout />
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Index;
