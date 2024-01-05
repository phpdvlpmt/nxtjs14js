import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const tests = [
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
    title: "Evropa - jeden ze světadílů",
    link: "/q6",
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
];

const Quiz = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-5 text-xl font-bold">
        <Link href="/q1">Naše vlast</Link>
        <Link href="/q2">Mapy</Link>
        <Link href="/q3">Povrch, vodstvo, počasí a podnebí</Link>
        <Link href="/q4">Zemědělství</Link>
        <Link href="/q5">Nerostné suroviny, průmysl</Link>
        <Link href="/q6">Evropa - jeden ze světadílů</Link>
        <Link href="/q7">Oceány a světadíly; Evropa</Link>
        <Link href="/q8">Sousední státy České republiky</Link>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {tests.map((test, index) => (
          <div key={index}>
            <Link href={test.link}>
              <Card>
                <CardHeader>
                  <CardTitle>{test.title}</CardTitle>
                  <CardDescription>{test.class}. ročník</CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Quiz;
