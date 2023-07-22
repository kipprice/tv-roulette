import { styled } from "@/lib/styled-system/jsx";
import { Header } from "@/lib/ui/Header";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const font = Comfortaa({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "TV Roulette",
  description: "Decide what you're going to watch tonight",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <styled.div
          w="100%"
          h="100%"
          bg="lightGamboge"
          display={"flex"}
          flexDir={"column"}
          position={"relative"}
          overflow={"hidden"}
        >
          {/* shared header across all of the pages */}
          <Header />

          <styled.main
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            overflow="auto"
            flexGrow={1}
            p={8}
          >
            {children}
          </styled.main>
        </styled.div>
      </body>
    </html>
  );
}
