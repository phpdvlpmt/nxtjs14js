"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress"
import { createResult } from "../../actions";



const Quizcomp = ({ quiz }) => {
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
  const [name, setName] = useState("");
  const [end, setEnd] = useState()
  
  //   Select and check answer
  /* if (showResult) {
    sendEmail()
  } */
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
          }
    );
    if (activeQuestion !== questions.length -1 ) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      //setShowResult(true);
      setEnd(true)
      
      //sendEmail()
    }

    setChecked(false);
  };
  const restart = () => {
    setActiveQuestion(0);
    setShowResult(false);
    setResult({
      
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  async function sendEmail(
    data = {
      name: name,
      
      correctAnswers: result.correctAnswers,
    }
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
    const name = e.target.name.value;
    setName(name);

    setShowForm(false);
  };
  
  const avrg = () => {
    const ar = ((result.correctAnswers / questions.length) * 100).toFixed()
    return ar
  }

  const grade = () => {
    let avr = avrg()
   
    switch(true) {
        case (avr > 88 ):
          return "1"// code block
          break;
        case (avr <88 && avr >=63  ):
            return "2"// code block
          break;
        case (avr <63 && avr >=38  ):
            return "3"// code block
        break;
        case (avr <38 && avr >=13  ):
            return "4"// code block
            break;
        case (avr<13   ):
            return "5"// code block
            break;
        default:
         return "???" // code block

      }
  }
  const endTest = async ( data = {
    title: quiz.title,
    username: name,
    correctAnswers: result.correctAnswers,
    wrongAnswers: result.wrongAnswers,
    total: quiz.totalQuestions,
    average: avrg(),
    grade: grade()
  }) => {
    //setShowResult(true);
    //await 
   // createResult({title: quiz.title, username: name, total: quiz.totalQustions, score: result.score})
   const response = await fetch("/api/quiz", {
    method: "POST",
    mode: "cors",

    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
   
  }
  if(end){
    console.log("už jsem na tlačítku")
      //sendEmail()
      endTest()
      setEnd(false)
      setShowResult(true)
      
  }
  /******************************/

  return (
    <div className="">
      {showForm && (
        <div className="flex flex-col w-1/3 gap-3">
           <h2 className="text-lg font-semibold">Přihlášení k testu - {quiz.title}</h2> 
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <input
              className="py-3 px-3 border"
              type="text"
              name="name"
              placeholder="Jméno"
              required
            />
            <button className="px-3 py-2 bg-gray-900 text-white">
              Přihlásit k testu
            </button>
          </form>
        </div>
      )}
      <div className={`${showForm ? "hidden" : "flex"}  flex-col gap-3`}>
        <div className="pb-12"><Progress value={activeQuestion / (questions.length  ) * 100} className=""/>
</div>
        <h1 className="text-xl font-semibold">Kvíz - {quiz.title}</h1>
        <div>
          {!showResult && (
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium">Jméno: {name}</h2>
              <h2 className="text-xl font-medium">
                Otázka: {activeQuestion + 1}
                <span>/{questions.length}</span>
              </h2>
            </div>
          )}
        </div>
        <div>
          {!showResult ? (
            <div className="flex  w-1/ 3  flex-col gap-3">
              <h3 className="text-2xl font-bold">{question}</h3>
              {answers.map((answer, idx) => (
                <button
                  disabled={disabled}
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`text-left p-3 w-full text-lg font-semibold  cursor-pointer ${
                    selectedAnswerIndex === idx ? " " : " hover bg-gray-100 dark:text-gray-900"
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
                  onClick={() => { nextQuestion(); activeQuestion === questions.length - 1 && "endTest()"}}
                  className="bg-gray-800 text-white w-fit px-4 py-2 cursor-pointer text-xl font-semibold"
                >
                  {activeQuestion === questions.length - 1? "Dokončit" : "Další"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="bg-gray-200 text-gray-800 w-fit px-4 py-2 cursor-not-allowed text-xl font-semibold"
                >
                  {" "}
                  {"Další"}
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-bold">Výsledky</h3>
             {/*  <h3 className="text-lg font-semibold">
                Průměr {((result.score / questions.length) * 100).toFixed(2)}%
              </h3> */}
              <h3 className="text-lg font-semibold">
                Průměr {avrg()}%
              </h3>
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
              <Link href="/" className="bg-orange-700 text-white w-fit px-3 py-2 cursor-pointer text-xl font-semibold">Vybrat jiný test</Link>
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

export default Quizcomp;
