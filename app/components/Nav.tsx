import Link from "next/link";
import Login from "../auth/Login";
import Logged from "../auth/Logged";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth].js";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <div className="logo-cont">
          <h1 className="logo">sherit</h1>
        </div>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
}
