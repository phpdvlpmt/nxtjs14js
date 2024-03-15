"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Pencil, Trash, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Convex = () => {
  const [open, setOpen] = useState();
  const createThumbnail = useMutation(api.thumbnails.createThumbnail);
  const deleteThumbnail = useMutation(api.thumbnails.deleteThumbnail);
  const updateThumbnail = useMutation(api.thumbnails.updateThumbnail);
  const thumbnails = useQuery(api.thumbnails.getThumbnails);
  console.log(thumbnails);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          const title = formData.get("title");
          // TODO: pass to our mutation
          await createThumbnail({
            title,
          });
          form.reset();
        }}
        action=""
        className="flex flex-col gap-2 w-96"
      >
        <Label>Title</Label>
        <Input name="title"></Input>
        <Button>Create</Button>
      </form>
      <div>
        {thumbnails &&
          thumbnails?.map((thumb) => (
            <p key={thumb._id} className="flex items-center gap-3">
              {thumb.title}
              <Button
                onClick={async () => await deleteThumbnail({ id: thumb._id })}
                variant="outline"
                size="icon"
              >
                <Trash2 />
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                  <Pencil />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form2 = e.target;
                      const formData = new FormData(form2);
                      const title = formData.get("title");
                      const id = formData.get("id");
                      // TODO: pass to our mutation
                      await updateThumbnail({
                        id,
                        title,
                      });
                      form2.reset();
                    }}
                    action=""
                    className="flex flex-col gap-2 w-96"
                  >
                    <Input type="hidden" name="id" value={thumb._id} />
                    <Label>Title</Label>
                    <Input name="title" placeholder={thumb.title}></Input>

                    <Button onClick={() => setOpen(false)} type="submit">
                      Update
                    </Button>
                  </form>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Convex;
