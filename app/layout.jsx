import "./globals.css";
import Nav from "./components/Nav";
import { Montserrat, Inter } from "@next/font/google";
import Image from "next/image";
import image from "../public/milad-fakurian-PGdW_bHDbpI-unsplash.jpg";
import AuthContext from "../app/auth/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>
      <body className={`mx-4 md:mx-48 xl:mx-96 ${inter.variable} font-sans`}>
        <Image
          className="landingImage"
          src={image}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          sizes="100vw"
          priority
          unoptimized="true"
        />
        <AuthContext>
          <Nav />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
