import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { tests } from "@/lib/tests";
import Quizes4 from "./quizes4";
import Quizes5 from "./quizes5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Baby, GraduationCap } from "lucide-react";
/* const tests = [
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
];*/
const class4 = tests.filter((test) => {
  return test.class === "4";
});
console.log(class4);

const class5 = tests.filter((test) => {
  return test.class === "5";
});
console.log(class5);

const QuizSection = () => {
  return (
    <>
      <Tabs defaultValue="quizes4" className="w-full mt-4">
        <TabsList>
          <TabsTrigger value="quizes4">
            <div className="flex items-center gap-3 font-bold">
              <Baby />
              Testy - 4. ročník
            </div>
          </TabsTrigger>
          <TabsTrigger value="quizes5">
            <div className="flex items-center gap-3 font-bold">
              <GraduationCap />
              Testy - 5. ročník
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="quizes4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-5 h-[400px] overflow-y-auto scrollbar-thin pr-2">
            {class4.map((test, index) => (
              <div key={index}>{<Quizes4 test={test} />}</div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="quizes5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-5 h-[400px] overflow-y-auto scrollbar-thin pr-2">
            {class5.map((test, index) => (
              <div key={index}>{<Quizes5 test={test} />}</div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default QuizSection;
