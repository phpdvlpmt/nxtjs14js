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
import ButtonIp from "@/components/buttonIp";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ModalAdd from "@/components/ModalAdd";

const getData = async () => {
  const data = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
  
};
export const revalidate = 5
const Playground = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    //redirect("/api/auth/signin");

    redirect("/api/auth/signin?callbackUrl=/playground");
  }
  const data = await getData();

  return (
    <div className="fle flex-col space-y-4">
      <ModalAdd/>
      <Form />

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-5 w-full py-10">
        {data.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
                <p className="font-bold">{post.title}</p>
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2">{post.content}</p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <div className="flex items-center gap-4">
              <Image src={post.author.image} alt="Author" width="30" height="30" className="rounded-full"/>
              <p>{post.author.email}</p>
              
              </div>
              <div className="flex gap-4 justify-between items-center">
                <form action={deleteItem}>
                  <input type="hidden" name="inputId" value={post.id} />
                  <button type="submit">
                    <Trash2Icon />
                  </button>
                </form>
                <ButtonIp id={post.id} />
              </div>
            </CardFooter>
          </Card>
        ))}
       
      </div>
    </div>
  );
};

export default Playground;
