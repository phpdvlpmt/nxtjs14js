import * as React from 'react';



export const EmailTemplate = ({
  name,
  
  correctAnswers
}) => (
  <div>
    <h1>Jméno: {name}</h1>
   
    <h1>Správné odpovědi: {correctAnswers}</h1>
  </div>
);
