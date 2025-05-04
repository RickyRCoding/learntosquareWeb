'use client';
import { useState, useEffect } from "react";

export default function Practice() {
  const [question, setQuestion] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Generate a random number when the component mounts
    const randomNumber = Math.floor(Math.random() * 90) + 10;
    setQuestion(randomNumber);
  }, []);

  return (
    <>

      {question !== null ? (
        <div>
          <p>Your question: {question}</p>
          <input type="text" placeholder="Your answer" />
        </div>
      ) : (<><h1 className="are">Are you ready?</h1>
        <button onClick={() => { setCounter(previous => { previous + 1 }) }}>Gimme a question!</button></>)}
    </>
  );
}