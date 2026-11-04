import localFont from "next/font/local";
import "./globals.css";
import { DefaultHeader, DefaultFooter } from "@/components/MainLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Apple Bookstore",
  description: "Discover books and audiobooks in the Apple Bookstore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DefaultHeader />
        <main className="dark:bg-gray-900">{children}</main>
        <DefaultFooter />
      </body>
    </html>
  )
}
