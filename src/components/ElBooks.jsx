import { Download } from "lucide-react";
import React from "react";
import ElBookItem from "./ElBookItem";
import Link from "next/link";

const Books4 = [
  {
    id: 1,
    title: "Vlastivěda 4 - zeměpis",
    image:
      "https://novaskoladuha.cz/data/products/263/8db33ef0e2d9f6bce76a4605a7005a4f-0.jpg",
    k: "0OSM-478M-0V3A-0C42",
  },
  {
    id: 2,
    title: "Vlastivěda 4 - zeměpis, pracovní sešit",
    image:
      "https://novaskoladuha.cz/data/products/264/3a7be87398f51cd635ad796b9a1b9cee-0.jpg",
    k: "4O8M-0V3M-0YSA-C402",
  },
  {
    id: 3,
    title: "Vlastivěda 4 - dějepis",
    image:
      "https://novaskoladuha.cz/data/products/177/07831b533e5156f03287302813369fc0-0.jpg",
    k: "478G-0ISM-0V3A-C042",
  },
  {
    id: 4,
    title: "Vlastivěda 4 - dějepis, pracovní sešit",
    image:
      "https://novaskoladuha.cz/data/products/178/fbe68dfe6e563eb7d6d74ba88019cc34-0.jpg",
    k: "4I8G-0V3M-0YSA-C402",
  },
];
const Books5 = [
  {
    id: 1,
    title: "Vlastivěda 5 - zeměpis",
    image:
      "https://novaskoladuha.cz/data/products/281/5719df63c4d665ea794beb26e7a51022-0.jpg",
    k: "478M-0OSG-0V3A-C042",
  },
  {
    id: 2,
    title: "Vlastivěda 5 - zeměpis, pracovní sešit",
    image:
      "https://novaskoladuha.cz/data/products/310/5c4187555d1e3ecb466f8bfe48775d38-0.jpg",
    k: "4O8M-0YSG-0V3A-C042",
  },
  {
    id: 3,
    title: "Vlastivěda 5 - dějepis",
    image:
      "https://novaskoladuha.cz/data/products/282/a29508a7d917229900d21f4759448ac8-0.jpg",
    k: "0V3G-478G-0ISA-4C02",
  },
  {
    id: 4,
    title: "Vlastivěda 5 - dějepis, pracovní sešit",
    image:
      "https://novaskoladuha.cz/data/products/311/90fa80bb756980d926e410af22a29c30-0.jpg",
    k: "0YSG-0V3G-4I8A-04C2",
  },
];

const ElBooks = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <span className="font-medium">
          IUč Manažer na správu interaktivních učebnic
        </span>
        <a
          href="https://download.novaskoladuha.cz/IUc-Manazer-v7.12.exe"
          title="stáhnout"
        >
          <Download className="text-muted-foreground" />
        </a>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-3">
          {Books4.map((book) => (
            <ElBookItem key={book.id} book={book} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {Books5.map((book) => (
            <ElBookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElBooks;
