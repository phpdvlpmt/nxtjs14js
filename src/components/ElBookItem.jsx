import { Check, Copy } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const ElBookItem = ({ book }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = (title, key) => {
    /* navigator.clipboard
      .writeText(key)
      .then(() => toast.success("Klíč byl zkopíován do schránky!"))
      .catch(() => toast.error("Chyba kopírování!")); */
    navigator.clipboard
      .writeText(key)
      .then(() => toast.success(`${title} - klíč byl zkopírován do schránky.`))
      .catch(() => toast.error("Chyba kopírování."));
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="flex items-center gap-5">
      <Image
        src={book.image}
        width={50}
        height={80}
        alt={book.title}
        priority
      />
      <div>
        <h2>{book.title}</h2>
        <div className="flex items-center gap-5">
          Klíč:{" "}
          {/* <Copy onClick={() => onCopyLink(book.k)} className="cursor-pointer" /> */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onCopy(book.title, book.k)}
            disabled={copied}
            className="h-8 rounded-l-none"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ElBookItem;
