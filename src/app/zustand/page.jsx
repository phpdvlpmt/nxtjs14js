"use client";
import { Button } from "@/components/ui/button";
import { usePupilStore } from "../../../stores/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, redirect } from "next/navigation";
const Zustand = () => {
  //const { count, inc, dec } = useStore();
  const names = [
    { name: "Natálie Tomanová" },
    { name: "Viktorie Zaňková" },
    { name: "Boris Sekera" },
    { name: "Sabina Kňourková" },
    { name: "Laura Ullmanová" },
    { name: "Mikuláš Netyk" },
    { name: "Jindřich Přibík" },
    { name: "Otto Starý" },
    { name: "Aneta Šitnerová" },
    { name: "Adéla Lupínková" },
    { name: "Sebastián Livora" },
    { name: "Tadeáš Faust" },
    { name: "Host" },
  ];
  /* const { count, inc, dec } = useBearStore(); */
  const { pupil, addPupil } = usePupilStore();
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    addPupil(username);
    router.push("/training");
  };

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
        <Select name="username" required autoComplete="off">
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
        </Select>

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
