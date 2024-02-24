import React, { useState } from "react";
import styles from "../../../../styles/python.module.css";
import { db } from "../../../../../firebase.config";
import { push, ref, get, set } from "firebase/database";
import Image from "next/image";
import { useEffect } from "react";

function Index() {
  const [formData, setFormData] = useState({
    Title: "",
    Body: "",
  });

  const [pythonCourseData, setPythonCourseData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const newDataRef = push(ref(db, "python_course"), formData);
      const newDataRefKey = newDataRef.key;
      return newDataRefKey;
    } catch (e) {
      console.error("Error submitting");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, "python_course");
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value,
          }));
          setPythonCourseData(dataArray);
        } else {
          setPythonCourseData([]);
        }
      } catch (error) {
        console.error("Error fetching data:");
        setPythonCourseData([]);
      }
    };

    fetchData();

    const fetchInterval = setInterval(fetchData, 6000);
    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Python Course</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src="/pythonIcon.png"
                width={600}
                height={250}
                alt="python_cion"
                className={styles.introIcon}
              />
            </div>
          </div>

          {pythonCourseData.map((data, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.itemHeader}>
                <h1>{data.Title || "Default Title"}</h1>
              </div>

              <div className={styles.itemDescription}>
                <p>{data.Body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <form onSubmit={handleSubmit}>
          <input
            name="Title"
            placeholder="title"
            value={formData.Title}
            onChange={handleChange}
          />
          <textarea
            name="Body"
            placeholder="Body"
            value={formData.Body}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </>
  );
}

export default Index;
