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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-background text-foreground h-20 flex flex-col items-center justify-center border">
          <h3>bg-background</h3>
          <h3>text-foreground</h3>
        </div>
        <div className="bg-foreground h-20 flex flex-col items-center justify-center text-background border">
          <h3>Foreground</h3>
          <h3>text-background</h3>
        </div>
        <div className="bg-card h-20 flex flex-col  items-center justify-center text-foreground border">
          <h3>bg-card</h3>
          <h3>text-foreground</h3>
        </div>
        <div className="bg-primary h-20 flex flex-col items-center justify-center text-background border">
          <h3>bg-primary</h3>
          <h3>text-background</h3>
        </div>
        <div className="bg-secondary h-20 flex flex-col items-center justify-center text-foreground border">
          <h3>bg-secondary</h3>
          <h3>text-foreground</h3>
        </div>
        <div className="bg-muted h-20 flex flex-col items-center justify-center text-foreground border">
          <h3>bg-muted</h3>
          <h3>text-foreground</h3>
        </div>
        <div className="bg-destructive h-20 flex flex-col items-center justify-center text-background border">
          <h3>bg-destructive</h3>
          <h3>text-background</h3>
        </div>
      </div>
    </div>
  );
};

export default ShadcnPage;
