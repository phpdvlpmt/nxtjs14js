"use client";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

export function TrashDelete() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant={"destructive"} size="icon" disabled>
          <Loader2 className="h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button variant={"destructive"} size="icon" type="submit">
          <Trash2Icon className="h-4 w-4" />
        </Button>
      )}
    </>
  );
}

export function TrashDeleteAll() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          variant={"destructive"}
          className="flex gap-3 items-center"
          disabled
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Smazat všechny záznamy</span>
        </Button>
      ) : (
        <Button
          variant={"destructive"}
          type="submit"
          className="flex gap-3 items-center"
        >
          <Trash2Icon className="h-4 w-4" />
          <span>Smazat všechny záznamy</span>
        </Button>
      )}
    </>
  );
}
