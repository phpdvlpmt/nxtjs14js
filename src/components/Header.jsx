"use client";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { usePupilStore } from "../../stores/store";

import React from "react";
import {
  BookOpenText,
  AlignJustify,
  FileSymlink,
  LogOutIcon,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./mode-toogle";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github", callbackUrl("/tailwind"))}>
        Sign in
      </button>
    </>
  );
}
const Links = [
  {
    name: <FileSymlink />,
    link: "/results",
  },
  /*  {
    name: <FileSymlink />,
    link: "/login",
  },
   {
    name: "Shadcn",
    link: "/shadcn",
  },
  {
    name: "Tailwind",
    link: "/tailwind",
  },
  {
    name: "Design",
    link: "/design",
  },
  {
    name: "Playground",
    link: "/playground",
  },
  {
    name: "Carousel",
    link: "/mycarousel",
  },
  {
    name: "Quiz",
    link: "/quiz",
  }, */
];

const Header = () => {
  const username = useSelector((state) => state.authReducer.value.username);
  const isAuth = useSelector((state) => state.authReducer.value.isAuth);
  //const { isAuth, pupil, logoutPupil } = usePupilStore();

  const dispatch = useDispatch();
  const pathname = usePathname();
  const [open, setOpen] = useState();
  const { data: session } = useSession();
  return (
    <header className="flex justify-between items-center py-3 border-b border-slate-50 dark:border-slate-800">
      <div className="flex items-center gap-10">
        <Link className="cursor-pointer" href="/">
          <BookOpenText />
        </Link>
        <Link className="cursor-pointer" href={"/game"}>
          <Gamepad2 />
        </Link>
      </div>
      <nav className="hidden sm:flex">
        <ul className="flex gap-x-4">
          {Links.map((link, index) => (
            <li key={index}>
              <Link className="font-medium  text-base" href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        {isAuth && (
          <div className="hidden sm:flex items-center gap-3 ">
            <h2 className="font-bold"> {username}</h2>
            <Button
              variant="ghost"
              className="flex gap-2"
              onClick={() => dispatch(logOut())}
              //onClick={() => logoutPupil()}
            >
              <LogOutIcon />
              Odhlásit
            </Button>
          </div>
        )}
        <ModeToggle />
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session.user.image}
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full"
                priority
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <button
                  onClick={() =>
                    signOut({
                      callbackUrl: "/",
                    })
                  }
                >
                  Odhlásit
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div>
            {/* <button onClick={() => signIn("github")}>Sign in</button> */}
          </div>
        )}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="flex sm:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex flex-col items-center justify-center text-base font-medium gap-4">
              <ul className="list-none flex flex-col  gap-4">
                <li onClick={() => setOpen(false)}>
                  <Link
                    className="font-normal dark:text-white text-foreground"
                    href="/"
                  >
                    <BookOpenText />
                  </Link>
                </li>
                {Links.map((link, index) => (
                  <li key={index} onClick={() => setOpen(false)}>
                    <Link
                      className="font-normal dark:text-white text-foreground"
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {isAuth && (
                <ul className=" flex flex-col items-center gap-4 ">
                  <li className="font-bold"> {username}</li>
                  <li>
                    <Button
                      variant="ghost"
                      className="flex gap-2"
                      onClick={() => {
                        dispatch(logOut());
                        //logoutPupil();
                        setOpen(false);
                      }}
                    >
                      <LogOutIcon />
                      Odhlásit
                    </Button>
                  </li>
                </ul>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
