import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import prisma from "../utils/db";
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
import { deleteResult } from "../../../actions";
import moment from "moment-timezone";

const getData = async () => {
  const data = await prisma.resume.findMany({});

  return data;
};
const Results = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const data = await getData();
  return (
    <div>
      <Table>
        <TableCaption className="pb-8">Seznam provedených testů</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Jméno žáka</TableHead>
            <TableHead className="font-bold">Název testu</TableHead>
            <TableHead className="font-bold">Počet otázek</TableHead>
            <TableHead className="font-bold">Správně</TableHead>
            <TableHead className="font-bold">Špatně</TableHead>
            <TableHead className="font-bold">Průměr</TableHead>
            <TableHead className="font-bold">Známka</TableHead>
            <TableHead className="font-bold">Datum</TableHead>
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
              <TableCell>
                {moment
                  .tz(item.createdAt, "Europe/Prague")
                  .format("D. M. YYYY H:mm")}
              </TableCell>
              <TableCell>
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
  );
};

export default Results;

