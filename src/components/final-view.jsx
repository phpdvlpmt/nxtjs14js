import Link from "next/link";
import React from "react";

const FinalView = ({ avrg, questions, result, grade }) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-bold">Výsledky</h3>
      {/*  <h3 className="text-lg font-semibold">
    Průměr {((result.score / questions.length) * 100).toFixed(2)}%
  </h3> */}
      <h3 className="text-lg font-semibold">Průměr {avrg}%</h3>
      <p className="text-lg font-semibold">
        Počet otázek: <span>{questions.length}</span>
      </p>
      <p className="text-lg font-semibold text-green-600">
        Správné odpovědi: <span>{result.correctAnswers}</span>
      </p>
      <p className="text-lg font-semibold text-red-500">
        Špatné odpovědi: <span>{result.wrongAnswers}</span>
      </p>
      <p className="text-lg font-semibold">Známka: {grade}</p>
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
  );
};

export default FinalView;
