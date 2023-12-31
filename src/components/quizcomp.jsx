'use client';
import React, { useEffect, useState } from 'react';
import  {quiz}  from '../../data';
import dynamic from 'next/dynamic'
import gettestdata, { getData } from './gettestdata';



const Quizcomp =  ( {quiz}) => {
  
 
  
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  const [ disabled, setDisabled] = useState(false)
   //   Select and check answer
   const onAnswerSelected = (answer, idx) => {
    setDisabled(true)
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setDisabled(false)
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      
      setActiveQuestion(0);
      setShowResult(true);
      console.log("tady to pošli")
     
      if (showResult){
        console.log("ok")
      }
      //sendEmail()
      
    }
   
    setChecked(false);
  };
  const restart = () => {
    setActiveQuestion(0);
    setShowResult(false);
    setResult({
        score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
        
    })
  }
  
  async function sendEmail( data = {"score": result.score, "correctAnswers": result.correctAnswers}) {
    
    const response = await fetch('/api/send', {
        method: 'POST',
        mode: 'cors',
       
        body: JSON.stringify(data)
    });
    
    const json = await response.json();
    return json
 }
 /******************************/ 

  return (
    <div className='container'>
      <h1 className='text-2xl font-semibold'>Kvíz</h1>
      <div>
      {!showResult &&(
        <h2 className='text-xl font-medium'>
          Otázka: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>)}
      </div>
      <div>
        {!showResult ? (
          <div className='w-1/3 flex flex-col gap-3'>
            <h3 className='font-bold'>{question}</h3>
            {answers.map((answer, idx) => (
              <button
              disabled={disabled}
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`text-left p-3 w-full text-lg font-semibold  cursor-pointer ${
                  selectedAnswerIndex === idx ? ' ' : ' hover bg-gray-100'
                } ${selectedAnswer && selectedAnswerIndex === idx && ' bg-green-400'}
                ${!selectedAnswer && selectedAnswerIndex === idx && ' bg-red-400'} 
                ${!selectedAnswer && checked && correctAnswer === answer && ' bg-green-400'}`}
              >
                <span>{answer}</span>
              </button>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className='bg-gray-800 text-white w-fit px-3 py-2 cursor-pointer text-xl font-semibold'>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className='bg-gray-100 text-gray-800 w-fit px-3 py-2 cursor-not-allowed text-xl font-semibold'>
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className='flex flex-col gap-5'>
            <h3 className='text-2xl font-bold'>Výsledky</h3>
            <h3 className='text-lg font-semibold'>Průměr {(result.score / questions.length) * 100}%</h3>
            <p className='text-lg font-semibold'>
              Počet otázek: <span>{questions.length}</span>
            </p>
            <p className='text-lg font-semibold'>
              Celkové skóre: <span>{result.score}</span>
            </p>
            <p className='text-lg font-semibold text-green-600'>
              Správné odpovědi: <span>{result.correctAnswers}</span>
            </p>
            <p className='text-lg font-semibold text-red-500'>
              Špatné odpovědi: <span>{result.wrongAnswers}</span>
            </p>
            <button className='bg-gray-800 text-white w-fit px-3 py-2 cursor-pointer text-xl font-semibold' onClick={() => restart()}>Restart</button>
          </div>
        )}
      </div>
      {/* {data.questions.map((q, idx )=> (
        <div key={idx}>{q}</div>
      ))} */}
    </div>
  )
}

export default Quizcomp