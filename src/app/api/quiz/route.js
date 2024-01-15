import prisma from "@/app/utils/db";

export async function POST(req) {
  const rs = await req.json();
  const username = rs.username;
  const title = rs.title;
  const total = rs.total;
  const correctAnswers = rs.correctAnswers;
  const wrongAnswers = rs.wrongAnswers;
  const average = rs.average;
  const grade = rs.grade;

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
    if (!result) return Response.json({ message: "error", status: 500 });
    return Response.json({ message: "success", status: 200, data: result });
    revalidatePath("/results");
  } catch (error) {
    return Response.json({ message: error, status: 500 });
  }
}
