"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { redirect } from "next/navigation";
import AccordionSection from "@/components/AccordionSection";
import QuizSection from "@/components/QuizSection";
import CountUpSection from "@/components/CountUpSection";
//import sessionStorage from "redux-persist/es/storage/session";

const Quiz = () => {
  const isAuth = useSelector((state) => state.authReducer.value.isAuth);

  if (!isAuth) {
    redirect("/login");
  }

  return (
    <div className="py-5">
      <CountUpSection />
      <AccordionSection />
      <QuizSection />
    </div>
  );
};

export default Quiz;
