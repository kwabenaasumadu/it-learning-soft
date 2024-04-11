import React, { useState, useEffect } from "react";
import styles from "../../../styles/forum.module.css";
import { db } from "../../../../firebase.config";
import { push, ref, get, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, TextField } from "@mui/material";

function Index() {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    date: "",
  });

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerData, setAnswerData] = useState(selectedAnswer);

  const [questionsAndAnswer, setQuestionsAndAnswer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "questions&Answers");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setQuestionsAndAnswer(dataArray);
        } else {
          setQuestionsAndAnswer([]);
        }
      } catch (error) {
        console.error("Error fetching data:");
        setQuestionsAndAnswer([]);
      }
    };

    fetchData();

    const fetchInterval = setInterval(fetchData, 1000);
    return () => clearInterval(fetchInterval);
  }, []);

  const handleSubmit = (e) => {
    if (!formData.question || !formData.answer) {
      toast.error("Ask or answer");
    }
    try {
      const currentDate = new Date().toLocaleDateString();

      const updatedFormData = { ...formData, date: currentDate };
      const questRef = push(ref(db, "questions&Answers"), updatedFormData);
      const questRefKey = questRef.key;
      toast.success("Question saved successfully");
      return questRefKey;
    } catch (e) {
      toast.error("Error saving question ");
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);



  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Get In Touch With Your Friends</h1>
        </div>

        <div className={styles.secondHeader}>
          <h1 onClick={handleOpen}>Ask Question</h1>
          <h1 onClick={handleOpen1}>Reply to Question</h1>
        </div>
        <div className={styles.chatContainer}>
          {questionsAndAnswer.map((chat, index) => (
            <div className={styles.chats} key={index}>
              <div className={styles.questionChatContainer}>
                <span></span>
                <h1>{chat?.question}</h1>
                <em>{chat?.date}</em>
              </div>

              <div className={styles.answerChatContainer}>
                <span></span>
                <h1>{chat?.answer}</h1>
                <em>{chat?.date}</em>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className={styles.modalContainer}>
          <h2>Ask Question</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Question"
              value={formData.question}
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
            />
            <Button type="submit">Submit</Button>
            <Button onClick={handleClose}>Close</Button>
          </form>
        </div>
      </Modal>

      <Modal open={open1} onClose={handleClose1}>
        <div className={styles.modalContainer}>
          <h2>Answer Question</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Answer"
              value={formData.answer}
              onChange={(e) =>
                setFormData({ ...formData, answer: e.target.value })
              }
            />
            <Button type="submit">Submit</Button>
            <Button onClick={handleClose1}>Close</Button>
          </form>
        </div>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Index;
