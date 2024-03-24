import { Karla } from "next/font/google";
import "@/app/globals.css";
import { SideBar } from "@/app/(root)/dashboard/shared/sidebar";
import Header from "@/app/(root)/dashboard/shared/dashobard-header";
import PageWrapper from "@/app/(root)/dashboard/shared/pagewrapper";
import { ThemeProvider } from "@/app/(root)/dashboard/shared/theme-provider";
import { Metadata } from "next";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});
export const metadata: Metadata = {
  title: "ATEC dashboard",
  description: "ATEC admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + " h-screen overflow-hidden"}>
        <ThemeProvider
          themes={["dark", "custom", "light"]}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <Header />
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
