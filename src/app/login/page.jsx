"use client";
import React from "react";
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
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

const Login = () => {
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
            <Select
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
            </Select>

            {/* <button
          type="submit"
          className=" text-sm px-2 py-2 w-auto bg-gray-900 text-white rounded-md"
        >
          Přihlásit
        </button> */}
            <div>
              <LoginBtn />
            </div>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Login;
