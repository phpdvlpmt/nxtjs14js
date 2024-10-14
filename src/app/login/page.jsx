"use client";
import React from "react";
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { usePupilStore } from "../../../stores/store";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { LoginBtn } from "@/components/Submitbuttons";

const names = [
  { name: "Anna Koubová" },
  { name: "Eliška Lorenzová" },
  { name: "Liliana Šoóšová" },
  { name: "Kryštof Klečka" },
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

const Login = () => {
  //const { isAuth, pupil, loginPupil, logoutPupil } = usePupilStore();
  const username = useSelector((state) => state.authReducer.value.username);
  const isAuth = useSelector((state) => state.authReducer.value.isAuth);
  const dispatch = useDispatch();
  if (isAuth) {
    redirect("/");
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    toast.success("Žák " + username + " byl úspěšně přihlášen.");

    dispatch(logIn(username));
    //loginPupil(username);
  };
  return (
    <div className="flex h-full flex-1  flex-col space-y-5 items-center justify-center">
      {/*  <span className="">{count}</span>
  <div className="flex gap-5">
    <Button onClick={inc}>Increase</Button>
    <Button variant="destructive" onClick={dec}>
      Decrease
    </Button>
  </div> */}

      <Card className="w-full  xl:w-1/3 whitespace-nowrap">
        <CardHeader>
          <CardTitle>Přihlášení</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <form
            className="flex flex-col sm:flex-row  gap-4 "
            onSubmit={onSubmit}
          >
            {/* <Select
              name="username"
              required
              autoComplete="off"
              className="w-full"
            >
              <SelectTrigger className="w-full flex-1">
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
            <div className="w-full">
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Vyber své jméno ze seznamu.
              </label>
              <div className="flex gap-3">
                <select
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                >
                  {/* <option selected>Vyber své jméno ze seznamu.</option> */}
                  {names.map((n, index) => (
                    <option key={index} value={n.name} className="">
                      {n.name}
                    </option>
                  ))}
                </select>
                <div>
                  <LoginBtn />
                </div>{" "}
              </div>
            </div>

            {/* <button
          type="submit"
          className=" text-sm px-2 py-2 w-auto bg-gray-900 text-white rounded-md"
        >
          Přihlásit
        </button> */}
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Login;
