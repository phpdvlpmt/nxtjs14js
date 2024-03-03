"use client";
import { shuffle } from "lodash";
import React from "react";
import { useEffect, useState } from "react";
import quiz from "../../../files/q2.json";
import { Button } from "@/components/ui/button";

const Ef = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  const [shuffledAnswers, setShuffledAnswers] = useState(answers);

  /*****************************/
  useEffect(() => {
    setShuffledAnswers(shuffle(answers));
  }, [activeQuestion, question, answers]);

  /**********************************/
  console.log(shuffledAnswers);
  return (
    <>
      <div>
        {shuffledAnswers.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
      <Button onClick={() => setActiveQuestion((prev) => prev + 1)}>
        další
      </Button>
    </>
  );
};

export default Ef;
