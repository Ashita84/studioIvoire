import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Studio Ivoire",
  description: "Modern heirlooms for the intentional home & wardrobe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-[#E5DACF]">
          <div className="container-pad py-4 flex justify-between">
            <Link href="/" className="font-serif text-xl text-[#6A1B2D]">Studio Ivoire</Link>
            <nav className="flex gap-5">
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/journal">Journal</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
