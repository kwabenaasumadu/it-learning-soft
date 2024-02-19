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
                    Writing the code: You write the program&apos;s instructions
                    ( source code ) in a programming language using text editor
                    or IDE ( Integrated Development Environment ).
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

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Programmer</h1>
              </div>
              <p>
                A programmer, also sometimes referred to as a software engineer,
                software developer, or coder, is a person who can design,
                create, and test computer programs. They do this by writing
                instructions, called code, in a specific programming language
                that a computer can understand. Programmers come in all shapes
                and sizes, with varying levels of experience and specialization.
                Here are some common types:
              </p>
              <p>
                <ul>
                  <li>
                    Full-Stack Developer - This programmer works on both the
                    front-end ( what users see and interact with ) and back-end
                    ( the server-side logic ) of applications.{" "}
                  </li>

                  <li>
                    Front-end Developer - This programmer focus on the user
                    interface of applications.
                  </li>

                  <li>
                    Back-end Developer - They build the behind the scenes logics
                    of applications.
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Essential Skills For Programmers</h1>
              </div>
              <p>
                <ul>
                  <li>
                    Problem-solving: Identifying and breaking down complex
                    problems into smaller, solvable steps.
                  </li>

                  <li>
                    Logical Thinking: Writing clear, concise, and well-organized
                    code that follows logical steps.
                  </li>

                  <li>
                    Continuous learning: The field of programming is constantly
                    envolving, so programmers need to stay up to date with new
                    technologies and trends.
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles.itemDescription}>
              <div className={styles.itemDesHeader}>
                <h1>Benefits Of Learning Programming</h1>
              </div>
              <p>
                <ul>
                  <li>Increased job opportunities in various fields.</li>

                  <li>
                    Develops critical thinking, problem-solving, and creativity.
                  </li>

                  <li>Allows you to build your own tools and applications.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
