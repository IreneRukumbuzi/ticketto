import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticketto",
  description: "Your Ticket to Design Thinking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
