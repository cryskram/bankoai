import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FaRegHeart } from "react-icons/fa6";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BankoAI",
  description: "Banking Answers, Instantly at Your Fingertips!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-mBlack text-white flex flex-col min-h-screen`}
      >
        <main className="flex-grow">{children}</main>
        <footer className="w-full bg-mOrange text-center p-4 text-black fixed bottom-0">
          <p className="inline-flex items-center gap-2 text-mBlack font-extrabold">
            Made with <FaRegHeart size={22} /> by Autoencoders
          </p>
        </footer>
      </body>
    </html>
  );
}
