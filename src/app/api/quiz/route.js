import prisma from "@/app/utils/db";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  const rs = await req.json();
  const r = rs.data;

  const username = r.username;
  const title = r.title;
  const total = r.total;
  const correctAnswers = r.correctAnswers;
  const wrongAnswers = r.wrongAnswers;
  const average = r.average;
  const grade = r.grade;

  try {
    const result = await prisma.resume.create({
      data: {
        username: username,
        title: title,
        total: parseInt(total),
        correctAnswers: parseInt(correctAnswers),
        wrongAnswers: parseInt(wrongAnswers),
        average: parseInt(average),
        grade: parseInt(grade),
      },
    });

    /* if (!result) return Response.json({ message: "error", status: 500 }); */
    revalidatePath("/results");
    return Response.json({ message: "success", status: 200, data: result });
  } catch (error) {
    return Response.json({ message: error, status: 500 });
  }
}
