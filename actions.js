import { revalidatePath } from "next/cache";
import prisma from "@/app/utils/db";
export const createPost = async (FormData) => {
    'use server'
    const title = FormData.get("title") ;
    const content = FormData.get("content") ;
    const authorId = FormData.get("authorId") ;
    await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId
      },
    });

    revalidatePath("/playground");
  }