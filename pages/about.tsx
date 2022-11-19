import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Page } from "../components/Page";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const page = await client.getSingle("about");

  return {
    props: {
      page,
    },
  };
};

type AboutProps = InferGetStaticPropsType<typeof getStaticProps>;

const About: React.FC<AboutProps> = ({ page }) => {
  return (
    <Page>
      <div>
        {page.data.profile && <PrismicNextImage field={page.data.profile} />}
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Page>
  );
};

export default About;
