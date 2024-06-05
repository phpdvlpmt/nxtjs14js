import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Quizes5 = ({ test }) => {
  return (
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
  );
};

export default Quizes5;
