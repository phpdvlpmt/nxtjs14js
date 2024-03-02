import React, { useCallback } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import prisma from "../utils/db";
import { shuffle } from "lodash";

const num = ["1", "2", "3 ", "4", "5"];

const TailwindPage = async () => {
  const session = await getServerSession(authOptions);

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });
  //console.log(session);

  /*  const Posts = await prisma.post.create({
    data: {
     
        title: 'Prisma ',
        content:"lorem",
        authorId: session.user.email 
    },
  }) */

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="flex gap-4 items-center">
      {users.map((user) => (
        <div key={user.id}>
          <Image src={user.image} alt={user.name} width={100} height={100} />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
      <div>
        <p>lodash</p>
        <div>
          <ul>
            {shuffle(num).map((num, i) => (
              <li key={i}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TailwindPage;
