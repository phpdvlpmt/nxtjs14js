import React from "react";
import gm from "../../../files/game.json";
import GCard from "@/components/GCard";

const GamePage = () => {
  const { questions } = gm;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-10">
      {questions.map((quest) => (
        <GCard key={quest.question} gquest={quest} />
      ))}
    </div>
  );
};

export default GamePage;
