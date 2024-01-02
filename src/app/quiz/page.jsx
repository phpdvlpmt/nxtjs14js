import Link from "next/link";

const Quiz = () => {
  return (
    <div className="flex flex-col gap-5 text-xl font-bold">
      <Link href="/quiz/q1">Naše vlast</Link>
      <Link href="/quiz/q2">Mapy</Link>
      <Link href="/quiz/q3">Povrch, vodstvo, počasí a podnebí</Link>
      <Link href="/quiz/q4">Zemědělství</Link>
      <Link href="/quiz/q5">Nerostné suroviny, průmysl</Link>
      <Link href="/quiz/q6">Evropa - jeden ze světadílů</Link>
    </div>
  );
};

export default Quiz;
