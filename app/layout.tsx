import { PropsWithChildren } from "react";
import { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/components/ThemeProvider";



const metadata: Metadata = {
  title: "Nickel",
  description: "A good metal",
};

const RootLayout = ( props: PropsWithChildren ) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Theme accentColor="indigo">
            {props.children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;