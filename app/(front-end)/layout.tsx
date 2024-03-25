import type { Metadata } from "next";

import "@/app/globals.css";

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Public Header</p>
      {children}
      <p>Footer</p>
    </div>
  );
}
