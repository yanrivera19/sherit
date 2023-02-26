"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <div className="sign-cont px-2 py-1">
        <button className="text-sm text-white" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
      <Link href={"/home"}>
        <Image
          width={64}
          height={64}
          src={image}
          alt=""
          className="w-14 rounded-full"
          priority
        />
      </Link>
    </li>
  );
}
