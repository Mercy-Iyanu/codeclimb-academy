import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeClimb Academy | Coding School for Kids",
  description:
    "CodeClimb Academy is a global online coding school for kids ages 4–18. Learn ScratchJr, Scratch, Python, and Web Development in fun, live 1-on-1 classes.",
  keywords:
    "coding for kids, online coding school, ScratchJr, Scratch, Python for kids, web development kids, kids programming",
  openGraph: {
    title: "CodeClimb Academy | Coding School for Kids",
    description:
      "Every child is climbing their own mountain of creativity, logic, and impact. Join CodeClimb Academy today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
