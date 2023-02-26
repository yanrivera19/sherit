"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <div className="sign-cont px-2 py-1">
        <button className="text-sm text-white" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </li>
  );
}
