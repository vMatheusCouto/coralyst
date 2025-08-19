import Header from "#/components/organisms/header";
import Panel from "#/components/organisms/panel";
import Sidebar from "#/components/organisms/sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coralyst",
  description: "Where the science starts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <div className="w-screen h-screen">
        <div className="w-screen flex h-[8vh] border-b-[0.1px] border-accent">
          <Header />
        </div>

        <div className="w-screen flex h-[92vh]">
          <Sidebar />
          <body
            className={`${font.className} antialiased flex-1 w-full overflow-y-scroll no-scrollbar`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
          <Panel />
        </div>
      </div>
    </html>
  );
}
