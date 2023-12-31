import * as React from 'react';



export const EmailTemplate = ({
  name,
  score,
  correctAnswers
}) => (
  <div>
    <h1>Jméno: {name}</h1>
    <h1>Skóre: {score}</h1>
    <h1>Správné odpovědi: {correctAnswers}</h1>
  </div>
);
