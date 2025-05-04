'use client';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [wannaLearn, setWannaLearn] = useState(false);

  const contentLearn = (
    <>
      <h1>How to Square</h1>
      <h4>
        To square a number, you multiply it by itself.<br />
        For example, to square 5, you do 5 x 5 = 25.<br />
        But to make it easier, you can use the following method:<br />
        <ol>
          <li>Take the first digit and multiply it by itself.</li>
          <li>Take the first digit and multiply it by the second digit, then double it.</li>
          <li>Take the second digit and multiply it by itself.</li>
          <li>Put them together in order.</li>
        </ol>
        For example, to square 23:<br />
        <ol>
          <li>2 x 2 = 4</li>
          <li>2 x 3 = 6, double it = 12</li>
          <li>3 x 3 = 9</li>
          <li>Put them together: 4, 12 (carry the one) and 9 become: 529</li>
        </ol>
        So 23 x 23 = 529.<br />
      </h4>
      <h2>Now, Do you want to</h2>
      <Link href="/practice">
        <button>Practice Squaring?</button>
      </Link>
    </>
  )
  return (
    <>
      {wannaLearn ? contentLearn :
        <>
          <h1>Welcome to the LearnToSquare Platform</h1>
          <h2>Do you want to...</h2>
          <button onClick={() => setWannaLearn(true)}>Learn To Square</button>
          <Link href="/practice">
            <button>Practice Squaring</button>
          </Link>
        </>
      }
    </>
  );
}
