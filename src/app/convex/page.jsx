"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Trash, Trash2 } from "lucide-react";

const Convex = () => {
  const createThumbnail = useMutation(api.thumnails.createThumbnail);
  const deleteThumbnail = useMutation(api.thumnails.deleteThumbnail);
  const thumbnails = useQuery(api.thumnails.getThumbnails);
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
              {thumb.title} + {thumb._id}
              <Button
                onClick={async () => await deleteThumbnail({ id: thumb._id })}
                variant="outline"
                size="icon"
              >
                <Trash2 />
              </Button>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Convex;
