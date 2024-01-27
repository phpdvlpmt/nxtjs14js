"use client";

import { useState } from "react";
import MyButton from "@/components/my-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTesterStore } from "../../../store/store";
import { useRouter } from "next/navigation";

const quiz = {
  totalQuestions: 10,
  title: "Hlavní města 2",
  questions: [
    {
      id: 1,
      question: "Hlavní město Norska?",
      answers: ["Oslo", "Paříž", "Řím", "Berlín"],
      correctAnswer: "Oslo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    },
    {
      id: 2,
      question: "Hlavní město Slovenska?",
      answers: ["Praha", "Bratislava", "Madrid", "Varšava"],
      correctAnswer: "Bratislava",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    },
  ],
};

const Training = () => {
  const { tester } = useTesterStore();
  const [variable, setVariable] = useState("");
  const router = useRouter();
  if (!tester) {
    router.push("/zustand");
  }
  return (
    <div className="flex flex-col">
      Variable: {variable}
      Tester: {tester}
      {/*  <button  */}
      <MyButton onClick={() => setVariable("pokus")} />
      <div>
        {quiz.questions.map((q) => (
          <div key={q.id}>
            <div>{q.question}</div>
            <div className="relative h-64">
              <Image src={q.image} alt="flag" fill className="object-contain" />
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
