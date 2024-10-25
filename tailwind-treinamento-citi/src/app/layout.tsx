import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Página Simples",
  description: "Aula 2 - treinamento de tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
