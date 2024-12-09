import type { Metadata } from "next";
import { FilterProvider } from "@/features/filters/models";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-Do",
  description: "For Three Tigers' Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FilterProvider>{children}</FilterProvider>
      </body>
    </html>
  );
}
