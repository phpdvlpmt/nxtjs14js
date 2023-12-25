"use server"
import { revalidatePath } from "next/cache";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/utils/auth";



export const createPost = async ( FormData) => {
  
  const session = await getServerSession(authOptions) 
    'use server'
    const title = FormData.get("title") ;
    const content = FormData.get("content") ;
    //const authorId = FormData.get("authorId") ;
    await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorEmail: session.user.email
      },
    });

    revalidatePath("/playground");
  }
  export async function deleteItem(FormData) {
    "use server";
  
    const inputId = FormData.get("inputId");
  
    await prisma.post.delete({
      where: {
        id: inputId,
      },
    });
  
    revalidatePath("/playground");
  }