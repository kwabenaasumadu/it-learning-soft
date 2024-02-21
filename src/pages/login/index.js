import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import { auth } from "../../../firebase.config";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Login successful, handle further actions (e.g., redirect)
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Login / Create Account</h1>
        </div>

        <div className={styles.inputFields}>
          <div className={styles.field}>
            <span>Email</span>
            <input
              placeholder="your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <span>Password</span>
            <input
              placeholder="your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

  
          <div className={styles.submitButton}>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleResetPassword}>Reset Password</button>
            <button onClick={handleSignUp}>Create Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
