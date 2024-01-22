"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Qc2 = ({ quiz }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  const [disabled, setDisabled] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [username, setUsername] = useState("");
  const [end, setEnd] = useState();
  const [q, setQ] = useState(0);
  const [prg, setPrg] = useState(false);

  //   Select and check answer
  /* if (showResult) {
    sendEmail()
  } */
  const names = [
    { name: "Natálie Tomanová" },
    { name: "Viktorie Zaňková" },
    { name: "Boris Sekera" },
    { name: "Sabina Kňourková" },
    { name: "Laura Ullmanová" },
    { name: "Mikuláš Netyk" },
    { name: "Jindřich Přibík" },
    { name: "Otto Starý" },
    { name: "Aneta Šitnerová" },
    { name: "Adéla Lupínková" },
    { name: "Sebastián Livora" },
    { name: "Tadeáš Faust" },
    { name: "Host" },
  ];

  const onAnswerSelected = (answer, idx) => {
    setDisabled(true);
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setDisabled(false);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,

            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          },
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setQ((prev) => prev + 1);
    } else {
      setQ((prev) => prev + 1);
      setDisabled(true);
      //setActiveQuestion(0);
      //setShowResult(true);
      //setEnd(true);

      //sendEmail()
    }

    setChecked(false);
  };
  const restart = () => {
    setActiveQuestion(0);
    setPrg(true);
    setDisabled(false);
    setShowResult(false);
    setResult({
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  async function sendEmail(
    data = {
      name: username,

      correctAnswers: result.correctAnswers,
    },
  ) {
    const response = await fetch("/api/send", {
      method: "POST",
      mode: "cors",

      body: JSON.stringify(data),
    });

    const json = await response.json();
    return json;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    setUsername(username);
    setPrg(true);

    setShowForm(false);
  };

  const avrg = () => {
    const ar = ((result.correctAnswers / questions.length) * 100).toFixed();
    return ar;
  };

  const grade = () => {
    let avr = avrg();

    switch (true) {
      case avr > 82:
        return "1"; // code block
        break;
      case avr < 82 && avr >= 63:
        return "2"; // code block
        break;
      case avr < 63 && avr >= 38:
        return "3"; // code block
        break;
      case avr < 38 && avr >= 13:
        return "4"; // code block
        break;
      case avr < 13:
        return "5"; // code block
        break;
      default:
        return "???"; // code block
    }
  };
  const endTest = async (
    data = {
      title: quiz.title,
      username: username,
      correctAnswers: result.correctAnswers,
      wrongAnswers: result.wrongAnswers,
      total: quiz.totalQuestions,
      average: avrg(),
      grade: grade(),
    },
  ) => {
    //setShowResult(true);
    //await
    // createResult({title: quiz.title, username: name, total: quiz.totalQustions, score: result.score})
    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(data),
      });
      if (response.ok) {
        const rs = await response.json();
        console.log(rs.data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (end) {
    //sendEmail()
    endTest();
    setEnd(false);
    setShowResult(true);
  }
  const finish = () => {
    setActiveQuestion(0);
    setQ(0);
    setPrg(false);
    setShowResult(true);

    setEnd(true);
  };
  /******************************/

  return (
    <div className="">
      {showForm && (
        <div className="flex flex-col  w-full sm:w-1/3 gap-3 py-2 lg:py-4 ">
          <h2 className="text-lg font-semibold">
            Přihlášení k testu - {quiz.title}
          </h2>
          <form className="flex  items-center  gap-2 " onSubmit={onSubmit}>
            {/* <input
              className="py-3 px-3 border"
              type="text"
              name="name"
              placeholder="Jméno"
              required
            /> */}
            <Select name="username" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Vyber své jméno ze seznamu." />
              </SelectTrigger>
              <SelectContent>
                {names.map((n, index) => (
                  <SelectItem key={index} value={n.name}>
                    {n.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <button
              type="submit"
              className=" text-sm px-2 py-2 w-auto bg-gray-900 text-white rounded-md"
            >
              Přihlásit
            </button>
          </form>
        </div>
      )}
      <div
        className={`${showForm ? "hidden" : "flex"}  flex-col gap-3 lg:gap-4`}
      >
        <div>
          {prg && (
            <Progress value={(q / questions.length) * 100} className="" />
          )}
        </div>
        <h1 className="text-xl font-semibold">Kvíz - {quiz.title}</h1>
        <div className="lg:py-4">
          {!showResult && (
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium">Jméno: {username}</h2>
              <h2 className="text-xl font-medium">
                Otázka: {activeQuestion + 1}
                <span>/{questions.length}</span>
              </h2>
            </div>
          )}
        </div>
        <div>
          {!showResult ? (
            <div className="flex  w-full  flex-col gap-3 lg:gap-4 pb-4">
              <h3 className="text-2xl font-bold">{question}</h3>
              {answers.map((answer, idx) => (
                <button
                  disabled={disabled}
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`text-left p-3 w-full text-lg font-semibold  cursor-pointer ${
                    selectedAnswerIndex === idx
                      ? " "
                      : " hover bg-gray-100 dark:text-gray-900"
                  } ${
                    selectedAnswer &&
                    selectedAnswerIndex === idx &&
                    " bg-green-400"
                  }
                ${
                  !selectedAnswer &&
                  selectedAnswerIndex === idx &&
                  " bg-red-400"
                } 
                ${
                  !selectedAnswer &&
                  checked &&
                  correctAnswer === answer &&
                  " bg-green-400"
                }`}
                >
                  <span>{answer}</span>
                </button>
              ))}
              {checked ? (
                <button
                  onClick={() => {
                    nextQuestion();
                    q === questions.length - 1;
                  }}
                  className="bg-gray-800 text-white w-fit px-4 py-2 cursor-pointer text-xl font-semibold rounded-md"
                >
                  {activeQuestion === questions.length - 1 ? "Další" : "Další"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion && (() => finish())}
                  disabled={q !== questions.length}
                  className={`${
                    q !== questions.length
                      ? "bg-gray-200 text-gray-800 w-fit px-4 py-2 text-xl font-semibold cursor-not-allowed rounded-md"
                      : "px-4 py-2 bg-gray-800 text-white cursor-pointer w-fit text-xl font-semibold rounded-md"
                  }`}
                >
                  {q === questions.length ? "Dokončit" : "Další"}
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-bold">Výsledky</h3>
              {/*  <h3 className="text-lg font-semibold">
                Průměr {((result.score / questions.length) * 100).toFixed(2)}%
              </h3> */}
              <h3 className="text-lg font-semibold">Průměr {avrg()}%</h3>
              <p className="text-lg font-semibold">
                Počet otázek: <span>{questions.length}</span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Správné odpovědi: <span>{result.correctAnswers}</span>
              </p>
              <p className="text-lg font-semibold text-red-500">
                Špatné odpovědi: <span>{result.wrongAnswers}</span>
              </p>
              <p className="text-lg font-semibold">Známka: {grade()}</p>
              <div className="flex gap-3">
                <button
                  className="bg-gray-800 text-white w-fit px-3 py-2 cursor-pointer text-xl font-semibold"
                  onClick={() => restart()}
                >
                  Restart
                </button>
                <Link
                  href="/"
                  className="bg-orange-700 text-white w-fit px-3 py-2 cursor-pointer text-xl font-semibold"
                >
                  Vybrat jiný test
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* {data.questions.map((q, idx )=> (
        <div key={idx}>{q}</div>
      ))} */}
      </div>
    </div>
  );
};

export default Qc2;
