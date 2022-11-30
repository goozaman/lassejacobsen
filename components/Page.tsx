import Head from "next/head";
import { FunctionComponent, PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

interface PageProps extends PropsWithChildren {}

export const Page: FunctionComponent<PageProps> = ({ children }) => {
  return (
    <div className="m-0 h-full w-full p-0 text-slate-700">
      <Head>
        <title>Christian Lebeck</title>
        <meta
          name="description"
          content="Content sharing website by Christian Lebeck"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navigation />

      <main className="flex grow flex-col">{children}</main>
    </div>
  );
};
