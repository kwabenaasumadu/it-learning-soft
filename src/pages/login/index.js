import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import { auth } from "../../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const router = useRouter();

  const SignIn = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    if (!email || !password) {
      toast.error("Please enter your email or password");
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Welcome", userCredential.user.email);
      router.push("/comps");
    } catch (error) {
      toast.error("Email or password error");
    } finally {
      setLoginLoading(false);
    }
  };

  const resetPassword = async () => {
    setResetLoading(true);
    if (!email) {
      toast.error("Please enter your email address");
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset sent successfully");
      router.push("/");

    } catch (error) {
      toast.error("Error sending password reset email");
      setResetLoading(false);
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    setCreateLoading(true);

    try {
      if (!email || !password) {
        toast.error("Please fill in your email or password");
      }

      const newUserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success(
        "Account successfully created",
        newUserCredential.user.email
      );
      await sendEmailVerification(newUserCredential.user);
      toast.success("Email verification sent to", newUserCredential.user.email);
      router.push("/comps");
    } catch (error) {
      toast.error("Error creating account");
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
            <button onClick={SignIn}>
              {loginLoading ? "wait..." : "Login"}
            </button>
            <button onClick={resetPassword}>
              {resetLoading ? "semding..." : "Reset Password"}
            </button>
            <button onClick={createAccount}>
              {createLoading ? "creating..." : "Create Account"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Index;
