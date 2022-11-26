import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FormEventHandler, FunctionComponent, useRef, useState } from "react";
import { Hero } from ".";
import { Bounded } from "../components/Bounded";
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

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const validateEmail = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async () => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setName("");
    setEmail("");
    setMessage("");
  };

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

          <form className="" >
            <InputField className="mb-4" id="name" label="Name" placeholder="John Doe" onChange={setName} value={name} />

            <InputField className="mb-4" id="email" label="Email" placeholder="johndoe@awesome.com" onChange={setEmail} value={email} />

            <InputField className="mb-4" id="message" label="Message" rows={10} placeholder="Hey Christian! Have you ever ...?" onChange={setMessage} value={message} />

            <div className="mb-4 flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-slate-800 py-2 px-4 font-bold text-white hover:bg-slate-600 focus:outline-none"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>

        </div>

      </Bounded>
    </Page>
  );
};

export default ContactPage;
