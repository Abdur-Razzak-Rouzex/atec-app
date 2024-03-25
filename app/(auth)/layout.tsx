import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Auth",
  description: "Association of Tangail Ex-Cadets",
  icons: {
    icon: "",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Auth layout</p>
      {children}
    </div>
  );
}
