import "./globals.css";
import { Itim, PT_Sans as PTSans } from "next/font/google";

const sans = PTSans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
const cursive = Itim({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });

export const metadata = {
  title: "Forth Street — web app development",
  description: "Custom solutions for your business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cursive.variable} ${sans.variable} font-sans`}>{children}</body>
    </html>
  );
}
