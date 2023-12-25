
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import { revalidatePath } from "next/cache";
import { createPost, deleteItem } from "../../../actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Form from "@/components/form";
import { Trash2Icon } from "lucide-react";


async function getData() {
  const data = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const Playground = async () => {
 
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    //redirect("/api/auth/signin");

    redirect("/api/auth/signin?callbackUrl=/playground");
  }
  const data = await getData();

  return (
    <div>
      <Form />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
        {data.map((post) => (
          <div key={post.id}>
            <h1 className="font-bold">{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author.email}</p>
            <form action={deleteItem}>
              <input type="hidden" name="inputId" value={post.id}/>
            <button type="submit"><Trash2Icon/></button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playground;
