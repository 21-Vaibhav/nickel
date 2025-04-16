import { PropsWithChildren } from "react";
import { Metadata } from "next";


const metadata: Metadata = {
  title: "Nickel",
  description: "A good metal",
};

const RootLayout = ( props: PropsWithChildren ) => {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;