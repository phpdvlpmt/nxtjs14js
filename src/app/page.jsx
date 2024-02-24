"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePupilStore } from "../../stores/store";
import PupilResultsTable from "@/components/PupilResultsTable";
import { Trophy, Medal, BookDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import ElBooks from "@/components/ElBooks";
//import sessionStorage from "redux-persist/es/storage/session";

const tests = [
  {
    title: "Opakování - Habsburkové českými králi; baroko",
    link: "/q02",
    class: "5",
    new: true,
  },
  {
    title: "Naše země v pravěku",
    link: "/q01",
    class: "4",
    new: true,
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

const Quiz = () => {
  const [mounted, setMounted] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.value.isAuth);
  const username = useSelector((state) => state.authReducer.value.username);
  const [data, setData] = useState([]);

  //const { isAuth, pupil, logoutPupil } = usePupilStore();

  useEffect(() => {
    const fetchPupilResults = async (pupil) => {
      const res = await axios.get("/api/?name=" + username);
      return setData(res.data.data);
    };
    fetchPupilResults();
  });
  /* useEffect(() => {
    if (mounted && !isAuth) {
      redirect("/login");
    }
  }); */
  if (!isAuth) {
    redirect("/login");
  }

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold ">
            <div className="flex items-center gap-2">
              <span>
                <BookDown className="w-4 h-4" />
              </span>
              <span>Chci elektronickou učebnici </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <ElBooks />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold ">
            <div className="flex items-center gap-2">
              <span>
                <Medal className="w-4 h-4" />
              </span>
              <span>Výsledky</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <PupilResultsTable data={data} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

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
