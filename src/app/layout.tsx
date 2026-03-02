import * as React from "react";
import { inter } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { globalMetadata } from "@/lib/metadata";
import { Navigation } from "@/components/layout/Navigation";
import Aurora from "@/components/3d/Aurora";

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-50 pointer-events-none">
            <Aurora
              colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
              blend={0.5}
              amplitude={1.0}
              speed={1}
            />
          </div>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
