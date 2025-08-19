import TopNavBar from "@/components/top-nav-bar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Página de portfolio de Franco Victor Ribeiro Sousa da Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased  `}>
        <TopNavBar />
        {children}
        <footer
          id="footer"
          className="w-full bg-footer py-10 flex flex-col items-center justify-center gap-6"
        >
          <span className="text-3xl text-gray-300 font-semibold">Contatos</span>
          <div className="flex items-start px-6 justify-center gap-6 flex-wrap max-sm:justify-start">
            <div className="flex  justify-center flex-col gap-2">
              <span className="text-2xl text-gray-300 font-semibold">
                E-mail
              </span>
              <span className="text-gray-300">
                francovictor.ribeiro@gmail.com
              </span>
              <span className="text-gray-300">franco_linkin@hotmail.com</span>
            </div>
            <div className="flex justify-center flex-col gap-2">
              <span className="text-2xl text-gray-300 font-semibold">
                Telefone / Whatsapp
              </span>
              <span className="text-gray-300">+55 (91) 9198134-9977</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
