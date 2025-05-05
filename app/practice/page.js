'use client';
import { useState, useEffect } from "react";

export default function Practice() {
  const [question, setQuestion] = useState(null);
  const [check, setCheck] = useState(null);
  const [answer, setAnswer] = useState();
  const [startTime, setStartTime] = useState(null); // Track when the question is generated
  const [timeSpent, setTimeSpent] = useState(null); // Track time spent answering
  const [totalTime, setTotalTime] = useState(0); // Track total time spent
  const [questionsAnswered, setQuestionsAnswered] = useState(0); // Track number of questions answered

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    setQuestion(randomNumber);
    setStartTime(Date.now()); // Record the start time when the question is generated
  }, []);

  const handleSubmit = () => {
    setCheck(true);
    const endTime = Date.now(); // Record the time when the answer is submitted
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Calculate time spent in seconds
    setTimeSpent(timeTaken);
    setTotalTime((prevTotal) => prevTotal + parseFloat(timeTaken)); // Update total time
    setQuestionsAnswered((prevCount) => prevCount + 1); // Increment questions answered
  };

  const averageTime = questionsAnswered > 0 ? (totalTime / questionsAnswered).toFixed(2) : 0;

  return (
    <>
      <div className="black">
        <p className="question">Your question: <span>{question}</span></p>
        <input
          type="text"
          placeholder="Your answer"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        {check && (
          <div>
            {answer != question * question && (
              <p>Correct answer: {question * question}</p>
            )}
            <p>Time spent answering: {timeSpent} seconds</p>
            <p>Average time spent: {averageTime} seconds</p>
            <button
              style={{
                backgroundColor: answer == question * question ? 'green' : '#ff6161',
                color: 'white',
                borderColor: answer == question * question ? 'darkgreen' : '#ff4040',
              }}
              onClick={() => {
                setCheck(false);
                const randomNumber = Math.floor(Math.random() * 90) + 10;
                setQuestion(randomNumber);
                setStartTime(Date.now()); // Reset the start time for the new question
                setAnswer(null); // Clear the previous answer
                setTimeSpent(null); // Reset the time spent
              }}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </>
  );
}
