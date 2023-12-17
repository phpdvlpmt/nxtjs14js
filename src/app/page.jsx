"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const Home = () => {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col space-y-5 w-full relative">
      <div>
        Proměnná <span className="text-primary font-bold text-xl">{text}</span>
      </div>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nová proměnná"
      />
      <Button onClick={() => setText("nová")} variant="destructive">
        Nastav proměnnou
      </Button>
      <div className="mt-8"></div>
    </div>
  );
};

export default Home;
