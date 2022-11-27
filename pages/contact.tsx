import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FunctionComponent, useState } from "react";
import { Bounded } from "../components/Bounded";
import { ContactForm } from "../components/ContactForm";
import { Heading } from "../components/Heading";
import { InputField } from "../components/InputField";
import { Page } from "../components/Page";
import { createClient } from "../prismicio";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("article");
  const about = await client.getSingle("about");
  const contact = await client.getSingle("contact");

  return {
    props: { articles, about, contact },
  };
};

type ContactPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ContactPage: FunctionComponent<ContactPageProps> = ({ contact }) => {

  return (
    <Page>
      <Bounded
        as="section"
        size="widest"
        noYPadding
        className="px-4 md:h-[calc(100vh-60px)]"
        innerClassName="h-full flex md:flex-row md:gap-0 gap-10 flex-col-reverse md:flex-row"
      >
        <div className="flex w-full items-end md:max-h-full md:w-full">
          <PrismicNextImage
            className="max-h-full max-w-full object-contain"
            field={contact.data.image}
          />
        </div>

        <div className="flex w-full flex-col pt-3 align-baseline md:w-1/2 md:pt-24 ">
          <Heading as="h2" size="3xl" className="mb-8">
            <PrismicText field={contact.data.title} />
          </Heading>

          <ContactForm />

        </div>

      </Bounded>
    </Page>
  );
};

export default ContactPage;
