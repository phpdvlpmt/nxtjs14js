import prisma from "@/app/utils/db";
//import useSessionStorage from "@/hooks/useSessionStorage";

export async function GET(req) {
  const username = req.nextUrl.searchParams.get("name");
  try {
    //let ok = useSessionStorage("pupil-storage");
    const data = await prisma.resume.findMany({
      where: {
        username: username,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json({ message: "success", status: 200, data: data });
  } catch (error) {
    return Response.json({ message: error, status: 500 });
  }
}
