"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const session = useSession();

  return (
    <>
      <h1 className="text-xl text-white font-bold">
        {session.data ? `Hello, ${session.data?.user?.name}!` : "Hello!"}
      </h1>
      <form action="">
        <div className="flex flex-col my-4 p-8 textarea-cont">
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
            placeholder="Anything to share?"
            className="p-4 text-large rounded-md my-2 mx-2 bg-gray-200"
          ></textarea>
        </div>
      </form>
    </>
  );
}
