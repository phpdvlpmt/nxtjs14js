"use client";
import moment from "moment-timezone";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteResult } from "../../../actions";
import { TrashDelete } from "@/components/Submitbuttons";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jméno žáka
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Název testu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "total",
    header: "Počet otázek",
  },
  {
    accessorKey: "correctAnswers",
    header: "Správně",
    cell: ({ row }) => {
      const c = row.getValue("correctAnswers");
      return <div className="text-green-500 font-bold">{c}</div>;
    },
  },
  {
    accessorKey: "wrongAnswers",
    header: "Špatně",
    cell: ({ row }) => {
      const wa = row.getValue("wrongAnswers");
      return <div className="text-red-500 font-bold">{wa}</div>;
    },
  },
  {
    accessorKey: "average",
    header: "Průměr",
    cell: ({ row }) => {
      const av = row.getValue("average");

      return av + "%";
    },
  },
  {
    accessorKey: "grade",
    header: "Známka",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Datum
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      const formatted = moment
        .tz(date, "Europe/Prague")
        .format("D. M. YYYY H:mm");

      return <div className="whitespace-nowrap">{formatted}</div>;
    },
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      const id = row.getValue("id");
      //console.log(id);
      return (
        <form action={deleteResult}>
          <input type="hidden" name="inputId" value={id} />
          {/* <button type="submit">
        <Trash2Icon />
      </button> */}
          <TrashDelete />
        </form>
      );
    },
  },
];
