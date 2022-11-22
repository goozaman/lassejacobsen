import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../prismicio";
import { Page } from "../components/Page";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { ArticlePreview } from "../components/Article";
import { Heading } from "../components/Heading";
import { Bounded } from "../components/Bounded";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("article");
  const about = await client.getSingle("about");
  const home = await client.getSingle("home");

  return {
    props: { articles, about, home },
  };
};

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: React.FC<HomePageProps> = ({ articles, about, home }) => {
  return (
    <Page>
      <Hero home={home} />
    </Page>
  );
};

const Hero: React.FC<Pick<HomePageProps, "home">> = ({ home }) => {
  return (
    <div className="mx-auto flex h-[calc(100vh-56px)] max-w-6xl flex-col justify-between px-4 pt-4 md:h-[calc(100vh-120px)] md:flex-row">
      <div className="flex w-full flex-col align-baseline md:w-1/2 md:p-12">
        <Heading as="h2">
          <PrismicText field={home.data.heroTitle} />
        </Heading>

        <div className="mt-6">
          <PrismicRichText field={home.data.heroText} />
        </div>
      </div>

      <div className="flex max-h-[50%] w-full items-end pr-2 md:max-h-full md:w-1/2 md:pl-12">
        <PrismicNextImage
          className="max-h-full max-w-full object-contain"
          field={home.data.heroImage}
        />
      </div>
    </div>
  );
};

export default HomePage;
