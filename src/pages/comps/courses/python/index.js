import React, { useState } from "react";
import styles from "../../../../styles/python.module.css";
import { db } from "../../../../../firebase.config";
import { push, ref, get } from "firebase/database";
import Image from "next/image";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Index() {
  const [formData, setFormData] = useState({
    Title: "",
    Body: "",
  });

  const [pythonCourseData, setPythonCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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
      push(ref(db, "python_course"), formData);
    } catch (e) {
      console.error("Error submitting:", e);
    }

    // Clear form data after submission
    setFormData({
      Title: "",
      Body: "",
    });
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
        console.error("Error fetching data:", error);
        setPythonCourseData([]);
      }
    };

    fetchData();

    const fetchInterval = setInterval(fetchData, 6000);
    return () => clearInterval(fetchInterval);
  }, []);

  // Calculate the index of the current item based on the currentPage
  const currentIndex = currentPage % pythonCourseData.length;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h1>Python Course</h1>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.item}>
            {pythonCourseData.length > 0 && (
              <>
                <div className={styles.itemHeader}>
                  <h1>{pythonCourseData[currentIndex].Title}</h1>
                </div>

                <div className={styles.itemDescription}>
                  
                  {pythonCourseData[currentIndex].Body}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Pagination controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>{currentPage + 1}/{pythonCourseData.length}</span>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === pythonCourseData.length - 1}
        >
          Next
        </button>
      </div>

      {/* Form for adding new data */}
       {/* <div className={styles.addForm}>
        <form onSubmit={handleSubmit}>
          <input
            name="Title"
            placeholder="Title"
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
      </div>  */}
    </>
  );
}

export default Index;
