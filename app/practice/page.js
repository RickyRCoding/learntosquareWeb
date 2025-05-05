'use client';
import { useState, useEffect } from "react";

export default function Practice() {
  const [question, setQuestion] = useState(null);
  const [check, setCheck] = useState(null);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    setQuestion(randomNumber);
  }, []);

  return (
    <>
      <div>
        <p className="question">Your question: <span>{question}</span></p>
        <input type="text" placeholder="Your answer" onChange={
          (e) => {
            setAnswer(e.target.value);
          }
        } />
        <br />
        <button onClick={() => {
          setCheck(true)
        }}>Submit</button>
        <br />
        {check && (
          <div>
            {answer != toString(question * question) && <p>Correct answer: {question * question}</p>}
            <button
              style={{
                backgroundColor: answer == question * question ? 'green' : '#ff6161',
                color: 'white',
                borderColor: answer == question * question ? 'darkgreen' : '#ff4040',
              }}
              onClick={
                () => {
                  setCheck(false);
                }
              }>Next Question</button>
          </div>
        )}
      </div >
    </>
  );
}