"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "./form";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";
import { createPost } from "../../actions";

const ModalAdd = () => {
  const [open, setOpen] = useState();
  const ref = useRef(null);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add new post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new post</DialogTitle>
          <DialogDescription>Add new post</DialogDescription>
        </DialogHeader>
        <form
          action={async (FormData) => {
            ref.current?.reset();
            await createPost(FormData);
          }}
          ref={ref}
        >
          <div className="flex flex-col space-y-5 max-w-sm">
            <Input type="text" name="title" placeholder="title" required />

            <Textarea
              type="text"
              name="content"
              placeholder="content"
              required
            />

            <Button onClick={() => setOpen(false)} type="submit">
              Submit
            </Button>
          </div>
        </form>
        <DialogFooter>
          {/*  <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAdd;
