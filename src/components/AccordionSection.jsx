"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { BookDown, Medal } from "lucide-react";
import ElBooks from "./ElBooks";
import PupilResultsTable from "./PupilResultsTable";

const AccordionSection = () => {
  const username = useSelector((state) => state.authReducer.value.username);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPupilResults = async (pupil) => {
      const res = await axios.get("/api/?name=" + username);
      return setData(res.data.data);
    };
    fetchPupilResults();
  });
  return (
    <div>
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
    </div>
  );
};

export default AccordionSection;
