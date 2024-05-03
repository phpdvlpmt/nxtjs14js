import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
const tests = [
  {
    title: "Opakování - naše republika po válce",
    link: "/q010",
    class: "5",
    new: true,
  },
  {
    title: "Opakování - husitské války a události po válce",
    link: "/q09",
    class: "4",
    new: true,
  },
  {
    title: "Opakování - Lucemburkové, gotika",
    link: "/q08",
    class: "4",
    new: true,
  },
  {
    title: "Opakování - jsme samostatný stát, 2. světová válka",
    link: "/q07",
    class: "5",
    new: true,
  },
  {
    title: "Opakování - za přemyslovských králů",
    link: "/q06",
    class: "4",
  },
  {
    title: "Určujeme století",
    link: "/q05",
    class: "4",
  },
  {
    title: "Opakování - novověk - naše země za vlády králů",
    link: "/q04",
    class: "5",
  },
  {
    title: "Opakování - počátek středověku",
    link: "/q03",
    class: "4",
  },
  {
    title: "Opakování - Habsburkové českými králi; baroko",
    link: "/q02",
    class: "5",
  },
  {
    title: "Naše země v pravěku",
    link: "/q01",
    class: "4",
  },
  {
    title: "Krajská města",
    link: "/q",
    class: "4",
  },
  {
    title: "Naše vlast",
    link: "/q1",
    class: "4",
  },
  {
    title: "Mapy",
    link: "/q2",
    class: "4",
  },
  {
    title: "Povrch, vodstvo, počasí a podnebí",
    link: "/q3",
    class: "4",
  },
  {
    title: "Zemědělství",
    link: "/q4",
    class: "4",
  },
  {
    title: "Nerostné suroviny, průmysl",
    link: "/q5",
    class: "4",
  },
  {
    title: "Služby, peníze, ochrana přírody",
    link: "/q6",
    class: "4",
  },
  {
    title: "Evropa - jeden ze světadílů",
    link: "/q60",
    class: "5",
  },
  {
    title: "Oceány a světadíly; Evropa",
    link: "/q7",
    class: "5",
  },
  {
    title: "Sousední státy České republiky",
    link: "/q8",
    class: "4",
  },
  {
    title: "Opakování č. 1",
    link: "/q9",
    class: "4",
  },
  {
    title: "Opakování č. 2",
    link: "/q10",
    class: "4",
  },
  {
    title: "Opakování č. 3",
    link: "/q11",
    class: "4",
  },
  {
    title: "Opakování č. 4",
    link: "/q12",
    class: "4",
  },
  {
    title: "Závěrečné opakování",
    link: "/q13",
    class: "4",
  },
  {
    title: "Hlavní města evropských států",
    link: "/q14",
    class: "5",
  },
  {
    title: "Závěrečné opakování",
    link: "/q15",
    class: "5",
  },
  {
    title: "Souhrnné opakování učiva",
    link: "/q16",
    class: "4",
  },
];

const QuizSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-5">
      {tests.map((test, index) => (
        <div key={index}>
          <Link href={test.link}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{test.title}</CardTitle>
                <CardDescription className="flex items-center justify-between">
                  <span>{test.class}. ročník</span>

                  {test.new && (
                    <span className="border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Nový
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuizSection;
