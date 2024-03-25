import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Auth",
  description: "Association of Tangail Ex-Cadets",
  icons: {
    icon: "",
  },
};

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Public layout</p>
      {children}
    </div>
  );
}
