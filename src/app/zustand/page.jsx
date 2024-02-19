"use client";
import { Button } from "@/components/ui/button";
import { usePupilStore } from "../../../stores/store";
import React, { useState } from "react";
import Select from "react-select";
/* import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; */
import { useRouter, redirect } from "next/navigation";
const Zustand = () => {
  //const { count, inc, dec } = useStore();
  const names = [
    { value: "Natálie Tomanová", label: "Natálie Tomanová" },
    { value: "Viktorie Zaňková", label: "Viktorie Zaňková" },
    { value: "Boris Sekera", label: "Boris Sekera" },
    { value: "Sabina Kňourková", label: "Sabina Kňourková" },
    { value: "Laura Ullmanová", label: "Laura Ullmanová" },
    { value: "Mikuláš Netyk", label: "Mikuláš Netyk" },
    { value: "Jindřich Přibík", label: "Jindřich Přibík" },
    { value: "Otto Starý", label: "Otto Starý" },
    { value: "Aneta Šitnerová", label: "Aneta Šitnerová" },
    { value: "Adéla Lupínková", label: "Adéla Lupínková" },
    { value: "Sebastián Livora", label: "Sebastián Livora" },
    { value: "Tadeáš Faust", label: "Tadeáš Faust" },
    { value: "Host", label: "Host" },
  ];
  /* const { count, inc, dec } = useBearStore(); */

  const { pupil, loginPupil } = usePupilStore();
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    loginPupil(username);
    router.push("/training");
  };
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="flex flex-col space-y-5">
      {/*  <span className="">{count}</span>
      <div className="flex gap-5">
        <Button onClick={inc}>Increase</Button>
        <Button variant="destructive" onClick={dec}>
          Decrease
        </Button>
      </div> */}
      <form className="flex  items-center  gap-2 " onSubmit={onSubmit}>
        {/* <Select name="username" required autoComplete="off">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Vyber své jméno ze seznamu." />
          </SelectTrigger>
          <SelectContent>
            {names.map((n, index) => (
              <SelectItem key={index} value={n.name}>
                {n.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
        {names.value}
        <Select
          name="username"
          options={names}
          value={names.value}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          placeholder="vyber jméno"
          className="w-64"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "hotpink",
              primary: "black",
            },
          })}
        />
        <button
          type="submit"
          className=" text-sm px-2 py-2 w-auto bg-gray-900 text-white rounded-md"
        >
          Přihlásit
        </button>
      </form>
      <div className="flex gap-4">
        <span className="font-bold">Přihlášen jako:</span>{" "}
        <span className="">{pupil}</span>
      </div>
    </div>
  );
};

export default Zustand;
