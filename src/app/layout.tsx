import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Recipes App",
  description: "Simple recipes app with Next.js + Prisma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/recipes/new">New Recipe</Link>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}