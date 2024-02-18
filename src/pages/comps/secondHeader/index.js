import React, { useState, useEffect } from "react";
import styles from "../../../styles/secondHeader.module.css";
import ShieldIcon from "@mui/icons-material/Shield";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/LogoutOutlined";

function Index() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(true)
  };

  const closeMenuHandler = () => {
   setToggleMenu(false)
  }

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
                <input placeholder="search courses" />
              </div>
            </div>
          </div>

          <div className={styles.menuIcon} onClick={toggleMenuHandler}>
            <MenuIcon />
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className={styles.menu}>
          <div className={styles.closeBurger} onClick={closeMenuHandler}>
            <h1>Close</h1>
          </div>
          <div className={styles.navLinks}>
            <p>Home</p>
            <p>About</p>
            <p>Courses</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className={styles.profile}>
            <div className={styles.item}>
              <Logout className={styles.icon} />
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
