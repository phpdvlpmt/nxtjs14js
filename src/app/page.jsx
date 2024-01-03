import Link from "next/link";

const Quiz = () => {
  return (
    <>
    <div className="flex flex-col gap-5 text-xl font-bold">
      <Link href="/q1">Naše vlast</Link>
      <Link href="/q2">Mapy</Link>
      <Link href="/q3">Povrch, vodstvo, počasí a podnebí</Link>
      <Link href="/q4">Zemědělství</Link>
      <Link href="/q5">Nerostné suroviny, průmysl</Link>
      <Link href="/q6">Evropa - jeden ze světadílů</Link>
      <Link href="/q7">Oceány a světadíly; Evropa</Link>
      <Link href="/q8">Sousední státy České republiky</Link>
    </div></>
  );
};

export default Quiz;
