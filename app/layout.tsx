import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ---> BURAYI KOMPLE KOPYALA YAPIŞTIR <---
export const metadata: Metadata = {
  title: "Ahmet Buğra Almas | Software Engineer",
  description: "Personal portfolio of Ahmet Buğra Almas. Software & AI Engineer specializing in NLP, ROS, and Python.",
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M10 5H22C26.4183 5 30 8.58172 30 13C30 17.4183 26.4183 21 22 21H14M14 21H24C28.4183 21 32 24.5817 32 29C32 33.4183 28.4183 37 24 37H10V5Z" stroke="url(%23paint0_linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear" x1="10" y1="5" x2="32" y2="37" gradientUnits="userSpaceOnUse"><stop stop-color="%2360A5FA"/><stop offset="1" stop-color="%23A855F7"/></linearGradient></defs></svg>`,
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  },
};
// ---> BURAYA KADAR <---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}