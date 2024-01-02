
import prisma from "@/app/utils/db";


export async function POST(req) {
    const rs = await req.json()
    const username = rs.username ;
    const title = rs.title ;
    const total = rs.total; 
    const score = rs.score ;
    const average = rs.average
    const grade = rs.grade
   
    
  try {
    
      await prisma.resume.create({
        data: {
            username: username,
            title: title,
            total: parseInt(total),
            score: parseInt(score),
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