import React from "react";
import styles from "../../../styles/forum.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Get In Touch With Your Friends</h1>
        </div>

        <div className={styles.secondHeader}>
          <h1>Ask Question</h1>
          <h1>Reply to Question</h1>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.chats}>
            <div className={styles.questionChatContainer}>
              <span>Kwabena</span>
              <h1>What is the meaning of javascript</h1>
              <em>23/23/1223</em>
            </div>

            <div className={styles.answerChatContainer}>
              <span>Emma</span>
              <h1>What is the meaning of javascript</h1>
              <em>23/23/1223</em>
            </div>

            <div className={styles.questionChatContainer}>
              <span>Kwabena</span>
              <h1>What is the meaning of javascript</h1>
              <em>23/23/1223</em>
            </div>

            <div className={styles.answerChatContainer}>
              <span>Emma</span>
              <h1>What is the meaning of javascript</h1>
              <em>23/23/1223</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
