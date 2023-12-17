import React, { useCallback } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const TailwindPage = async () => {
  const session = await getServerSession();

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });

  if (!session || !session.user) {
    //redirect("/api/auth/signin");

    redirect("/api/auth/signin?callbackUrl=/tailwind");
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
    </div>
  );
};

export default TailwindPage;
