import { Download } from "lucide-react";
import React from "react";
import ElBookItem from "./ElBookItem";

const Books = [
  {
    id: 1,
    title: "Vlastivěda 4 - dějepis",
    image:
      "https://novaskoladuha.cz/data/products/177/07831b533e5156f03287302813369fc0-0.jpg",
    k: "4782-0ISM-0V3A-C042",
  },
  {
    id: 2,
    title: "Vlastivěda 4 - dějepis, pracovní sešit",
    image:
      "https://novaskoladuha.cz/data/products/178/fbe68dfe6e563eb7d6d74ba88019cc34-0.jpg",
    k: "4I82-0YSM-0V3A-C042",
  },
  {
    id: 3,
    title: "Vlastivěda 5 - dějepis",
    image:
      "https://novaskoladuha.cz/data/products/282/a29508a7d917229900d21f4759448ac8-0.jpg",
    k: "0IS2-0V3G-478A-04C2",
  },
  {
    id: 4,
    title: "Vlastivěda 5 - dějepis, pracovní sešit",
    image:
      "https://novaskoladuha.cz/data/products/311/90fa80bb756980d926e410af22a29c30-0.jpg",
    k: "0V32-4I8G-0YSA-4C02",
  },
];

const ElBooks = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <span>IUč Manažer na správu interaktivních učebnic</span>
        <a
          href="https://download.novaskoladuha.cz/IUc-Manazer-v7.12.exe"
          title="stáhout"
        >
          <Download className="text-muted-foreground" />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        {Books.map((book) => (
          <ElBookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ElBooks;
