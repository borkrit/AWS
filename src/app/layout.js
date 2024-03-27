import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalitic from "@/app/googleAnalitic";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <nav>
      <Link href={'/'} > Home </Link>
      <Link href={'/about'} > About </Link>
      <Link href={'/contact'} > Contact </Link>
    </nav>
      <GoogleAnalitic ga_id={'G-1WK8W0653J'} />
    <Wrapper>
      {children}
    </Wrapper>
    </body>
    </html>
  );
}
