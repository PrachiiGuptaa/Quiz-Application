import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Home.module.css'
export default function HomePage() {
  const [quizCritera, setQuizCriteria] = useState("");

  const navigate = useNavigate();

  const quizTopic = ["Cricket", "Bollywood", "IT"];

  function handleSelect(e) {
    console.log(e.target.value);
    setQuizCriteria(e.target.value);
  }
  function redirectToQuizPage() {
    console.log(quizCritera, "redirect");  
    navigate(`/${quizCritera.toLowerCase()}`);
  }

  return (
    <div className={style.wrapper}>
    <div className={style.main}>
      <h3>Quiz</h3>
      <h5>Test Your Knowledge</h5>
      </div>
      <div className={style.select}>
      <select onChange={handleSelect}>
        <option>Select Topic</option>
        {quizTopic.map((x, i) => (
          <option key={i}>{x}</option>
        ))}
      </select>
      {quizCritera ? (
        <>
          <h3>Start{quizCritera}</h3>
          <button className={style.btn} onClick={redirectToQuizPage}>
          Start 
            {quizCritera} Quiz <span className={style.arrow} >&rarr;</span>
          </button>
        </>
      ) : (
        <p>Please choose the topic </p>
      )}
    </div>
    </div>
  );
}
