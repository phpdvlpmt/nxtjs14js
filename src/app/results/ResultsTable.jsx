"use client";

import { TrashDelete, TrashDeleteAll } from "@/components/Submitbuttons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2Icon } from "lucide-react";
import { deleteAllResult, deleteResult } from "../../../actions";
import moment from "moment-timezone";
import { Button } from "@/components/ui/button";

export const ResultsTable = ({ data }) => {
  return (
    <div className="pb-10">
      <Table>
        <TableCaption className="pb-5 space-y-4">
          <div>Seznam provedených testů</div>
          {data.length > 0 && (
            <div>
              <form action={deleteAllResult}>
                {/* <Button
                  variant="destructive"
                  type="submit"
                  className="flex items-center gap-1"
                >
                  <Trash2Icon />
                  <span>Smazat všechny záznamy</span>
                </Button> */}
                <TrashDeleteAll />
              </form>
            </div>
          )}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Jméno žáka</TableHead>
            <TableHead className="font-bold">Název testu</TableHead>
            <TableHead className="font-bold">Počet otázek</TableHead>
            <TableHead className="font-bold">Správně</TableHead>
            <TableHead className="font-bold">Špatně</TableHead>
            <TableHead className="font-bold">Průměr</TableHead>
            <TableHead className="font-bold">Známka</TableHead>
            <TableHead className="font-bold min-w-[120px] whitespace-nowrap">
              Datum
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-bold">{item.username}</TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell className="text-green-500">
                {item.correctAnswers}
              </TableCell>
              <TableCell className="text-red-500">
                {item.wrongAnswers}
              </TableCell>
              <TableCell>{item.average}%</TableCell>
              <TableCell>{item.grade}</TableCell>
              <TableCell className="whitespace-nowrap">
                {moment
                  .tz(item.createdAt, "Europe/Prague")
                  .format("D. M. YYYY H:mm")}
              </TableCell>
              <TableCell>
                <form action={deleteResult}>
                  <input type="hidden" name="inputId" value={item.id} />
                  {/* <button type="submit">
                    <Trash2Icon />
                  </button> */}
                  <TrashDelete />
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
