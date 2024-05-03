import { tests } from "@/lib/tests";
import React from "react";
import CountUp from "react-countup";

const CountUpSection = () => {
  return (
    <div className="flex gap-x-2 items-center justify-center w-full">
      <CountUp
        end={tests.length}
        delay={1}
        duration={4}
        className="text-destructive font-extrabold text-4xl"
      />
      <span className="text-muted-foreground text-xl font-semibold">
        testů 🖐
      </span>
    </div>
  );
};

export default CountUpSection;
