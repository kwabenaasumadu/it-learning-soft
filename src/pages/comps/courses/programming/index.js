import React from "react";
import styles from "../../../../styles/programming.module.css";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Programming Course</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h1>Introduction To Programming</h1>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Programming</h1>
              </div>
              <p>
                Programming is the process of writing instructions that
                computers can understand and execute to perform specific task.
                It involves creating algorithms, data structures, and logical
                sequences to solve problems efficiently and control the
                behaviour of hardware or software systems
              </p>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Instructions</h1>
              </div>
              <p>
                These are the step by step commands that the computer follows.
                These instructions are written in a language that a computer
                understands, like Python, JavaScript, C++, or Java
              </p>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Data</h1>
              </div>
              <p>
                This is the information the program works with. It can be
                numbers, text, images or anything else the program needs to
                process.
              </p>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Functionality</h1>
              </div>
              <p>
                Programs can perform various task, from simple calculations ro
                complex task like running websites or playing games
              </p>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>How It Works</h1>
              </div>
              <p>
                <ul>
                  <li>
                    Writing the code: You write the program&apos;s instructions (
                    source code ) in a programming language using text editor or
                    IDE ( Integrated Development Environment ).
                  </li>
                  <br />
                  <li>
                    Translation: Your source needs to be translated into machine
                    code using compiler or interpreter. Example Python uses
                    interpreter, JavaScript uses compiler
                  </li>
                  <br />
                  <li>
                    Execution: After the codes are translated into machine code,
                    the computer reads the instructions one by one and runs it
                    or execute them
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className={styles.itemAction}>
            <p>Want to Learn More</p>
            <h1>Click To Download</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
