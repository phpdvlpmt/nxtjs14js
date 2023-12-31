import * as React from 'react';



export const EmailTemplate = ({
  score,
  correctAnswers
}) => (
  <div>
    <h1>Score: {score}!</h1>
    <h1>Správné odpovědi: {correctAnswers}!</h1>
  </div>
);
