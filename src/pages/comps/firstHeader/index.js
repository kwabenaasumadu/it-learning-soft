import React, { useState } from "react";
import styles from "../../../styles/firstheader.module.css";
import Person2 from "@mui/icons-material/Person2";
import Logout from "@mui/icons-material/LogoutOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twittter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../../../../firebase.config";
import { toast } from "react-toastify";
import { useAuth } from "@/lib/authContext";

function Index() {
  const { user } = useAuth();
  const [logoutLoading, setLogoutLoading] = useState(false)

  const handleLogout = async () => {
    setLogoutLoading(true)
    try {
      await auth.signOut();
      toast.success("Logout was successful", user.email);
    } catch (err) {
      toast.error("Error signing out");
      setLogoutLoading(false)
    }
  };
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
                <Person2 className={styles.icon} />
                <p>Profile</p>
              </div>
              <div className={styles.item} onClick={handleLogout}>
                <Logout className={styles.icon} />
                <p>{logoutLoading ? "logging out..." : "Logout"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
