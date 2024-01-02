import React from 'react'
import prisma from '../utils/db';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2Icon } from "lucide-react";
import { deleteResult } from '../../../actions';
import { format } from "date-fns";

const getData = async () => {
  const data = await prisma.resume.findMany({
    
  });

  return data;
  
};
const Results = async () => {
  const data = await getData();
  return (
    <div>
    <Table>
  <TableCaption>Seznam provedených testů</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="font-bold">Jméno žáka</TableHead>
      <TableHead  className="font-bold">Název testu</TableHead>
      <TableHead className="font-bold">Počet otázek</TableHead>
      <TableHead className="font-bold">Počet správných odpovědí</TableHead>
      <TableHead className="font-bold">Počet špatných odpovědí</TableHead>
      <TableHead className="font-bold">Průměr</TableHead>
      <TableHead className="font-bold">Známka</TableHead> 
      <TableHead className="font-bold">Datum</TableHead> 
    </TableRow>
  </TableHeader>
  <TableBody>
  {data.map(item =>(
    <TableRow key={item.id}>
      <TableCell className="font-bold">{item.username}</TableCell>
      <TableCell className="font-medium">{item.title}</TableCell>
      <TableCell>{item.total}</TableCell>
      <TableCell >{item.correctAnswers}</TableCell>
      <TableCell className="text-red-500">{item.wrongAnswers}</TableCell>
      <TableCell >{item.average}</TableCell>
      <TableCell >{item.grade}</TableCell>
      <TableCell >{format(item.createdAt, "d. M .yyyy HH:mm")}</TableCell>
      <TableCell >
      <form action={deleteResult}>
        <input type="hidden" name="inputId" value={item.id} />
        <button type="submit">
          <Trash2Icon />
        </button>
      </form>
      </TableCell>
    </TableRow>
  ))}
  </TableBody>
</Table>

    </div>
  )
}

export default Results

/* {data.map(item =>(
  <div key={item.id}></div>
))} */