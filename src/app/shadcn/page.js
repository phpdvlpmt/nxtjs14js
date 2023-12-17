import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ShadcnPage = async () => {
  /* await prisma.user.create({
    data: {
      name: "John",
      email: "john@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  }); */
  return (
    <div>
      <span className=" text-6xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-indigo-900 via-red-500 to-pink-400"></span>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShadcnPage;
