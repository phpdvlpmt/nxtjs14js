"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const GCard = ({ gquest }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card onClick={() => setOpen(true)} className="hover:cursor-pointer">
        <CardHeader>
          <CardTitle>{gquest.question}</CardTitle>
          <CardDescription>Otázka č. {gquest.id}</CardDescription>
        </CardHeader>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] p-10">
          <DialogHeader>
            <DialogTitle>{gquest.answer}</DialogTitle>
          </DialogHeader>

          <DialogFooter>
            {/*  <Button type="submit">Save changes</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GCard;
