"use client";

import { useEffect, useState } from "react";
import MyButton from "@/components/my-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
//import { useTesterStore } from "../../../stores/store";
import { usePupilStore } from "../../../stores/store";
import { useRouter, redirect } from "next/navigation";
import { add } from "date-fns";
import Link from "next/link";

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
  //const { tester } = useTesterStore();
  const { isAuth, pupil, logoutPupil } = usePupilStore();
  const [variable, setVariable] = useState("");
  // const [p, setP] = useState(pupil);
  //const items = window.sessionStorage.getItem("pupil-storage");
  /* const storedValue = JSON.parse(
    window.sessionStorage.getItem("pupil-storage"),
  ); */
  //const router = useRouter();
  if (!isAuth) {
    redirect("/zustand");
  }
  /*  useEffect(() => {
    const storedValue = JSON.parse(
      window.sessionStorage.getItem("pupil-storage"),
    );
    if (storedValue?.state.pupil) {
      console.log(storedValue.state.pupil);
    } else {
      redirect("/zustand");
    }
  }, []);
 */
  /* if (!pupil) {
    router.push("/zustand");
  } else {
    router.push("/training");
  } */

  return (
    <div className="flex flex-col">
      Variable: {variable}
      Tester: {pupil}
      <Link
        href={
          "https://vneyqzcxougmwcpyueku.supabase.co/storage/v1/object/public/Download/ok.zip?t=2024-02-19T15%3A07%3A02.350Z"
        }
      >
        Stáhnout
      </Link>
      {/*  <button  */}
      <MyButton onClick={() => setVariable("pokus")} />
      <div>
        {quiz.questions.map((q) => (
          <div key={q.id}>
            <div>{q.question}</div>
            <div className="relative h-64">
              <Image
                src={q.image}
                alt="flag"
                fill
                className="object-contain"
                priority
              />
            </div>{" "}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          logoutPupil();

          /*  router.push("/zustand");
          addPupil(""); */
        }}
      >
        Odlásit
      </button>
    </div>
  );
};

export default Training;
