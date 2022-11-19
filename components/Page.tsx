import Head from "next/head";
import { FunctionComponent, PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

interface PageProps extends PropsWithChildren {}

export const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Christian Lebeck</title>
        <meta
          name="description"
          content="Content sharing website by Christian Lebeck"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex flex-col">{children}</main>
    </div>
  );
};
