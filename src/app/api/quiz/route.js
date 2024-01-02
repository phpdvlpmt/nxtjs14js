
import prisma from "@/app/utils/db";


export async function POST(req) {
    const rs = await req.json()
    const username = rs.username ;
    const title = rs.title ;
    const total = rs.total; 
    const correctAnswers = rs.correctAnswers;
    const wrongAnswers = rs.wrongAnswers;
    const average = rs.average
    const grade = rs.grade
   
    
  try {
    
    
      await prisma.resume.create({
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
      revalidatePath("/results");

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}