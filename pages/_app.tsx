import "../styles/globals.css";
import "../node_modules/react-vis/dist/style.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import {
  PrismicLink,
  PrismicProvider,
  PrismicProviderProps,
} from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Heading } from "../components/Heading";
import { LinkResolverFunction } from "@prismicio/helpers";

const richTextComponents: PrismicProviderProps<LinkResolverFunction>["richTextComponents"] =
  {
    heading1: ({ children }) => (
      <Heading as="h2" size="3xl" className="mb-7 mt-12 first:mt-0 last:mb-0">
        {children}
      </Heading>
    ),
    heading2: ({ children }) => (
      <Heading as="h3" size="2xl" className="mb-7 last:mb-0">
        {children}
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading as="h4" size="xl" className="mb-7 last:mb-0">
        {children}
      </Heading>
    ),
    paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
    oList: ({ children }) => (
      <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
    ),
    oListItem: ({ children }) => (
      <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
    ),
    list: ({ children }) => (
      <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
    ),
    listItem: ({ children }) => (
      <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
    ),
    preformatted: ({ children }) => (
      <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicLink
        field={node.data}
        className="underline decoration-1 underline-offset-2"
      >
        {children}
      </PrismicLink>
    ),
  };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      richTextComponents={richTextComponents}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href} {...props} />
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
