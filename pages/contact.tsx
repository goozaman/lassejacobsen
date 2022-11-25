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
  const handleSubmit = () => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test",
        email: "123456asdasd@mailinator.com",
        message: "test",
      }),
    });
  };

  return (
    <Page>
      Contact me!<button onClick={handleSubmit}>here</button>
    </Page>
  );
};

export default ContactPage;
