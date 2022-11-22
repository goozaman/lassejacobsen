import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FunctionComponent } from "react";
import { Page } from "../components/Page";
import { createClient } from "../prismicio";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("article");
  const about = await client.getSingle("about");

  return {
    props: { articles, about },
  };
};

type ContactPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ContactPage: FunctionComponent<ContactPageProps> = () => {
  return <Page>Contact me!</Page>;
};

export default ContactPage;
