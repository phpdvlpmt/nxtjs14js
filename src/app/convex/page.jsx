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
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  console.log(thumbnails);
  return (
    <div className="flex flex-col gap-y-4">
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
      <div className="flex flex-col gap-3 w-96">
        {/* /*******************MAP************************ */}
        {thumbnails &&
          thumbnails?.map((thumb) => (
            <div key={thumb._id} className="flex items-center gap-3 w-full">
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
                  <Button
                    variant="outline"
                    size="icon"
                    className="flex self-end"
                  >
                    <Pencil
                      onClick={() => {
                        setId(thumb._id);
                        setTitle(thumb.title);
                      }}
                    />
                  </Button>
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
                    <Input type="hidden" name="id" value={id} />
                    <Label>Title</Label>
                    <Input name="title" defaultValue={title}></Input>

                    <Button
                      onClick={() => setOpen(false)}
                      type="submit"
                      variant="outline"
                    >
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default Convex;
