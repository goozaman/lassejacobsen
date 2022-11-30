import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { Page } from "../../components/Page";
import Head from "next/head";
import { Bounded } from "../../components/Bounded";
import Link from "next/link";
import { Heading } from "../../components/Heading";
import { PrismicNextImage } from "@prismicio/next";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export async function getStaticPaths() {
  const client = createClient();
  const projects = await client.getAllByType("project");

  const paths = projects.map((project) => prismicH.asLink(project));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({
  previewData,
  params,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const project = params ? await client.getByUID("project", params.uid as string) : undefined;

  return {
    props: { project },
  };
};

type ProjectProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Project: React.FC<ProjectProps> = ({
  project,
}) => {
  if (!project)
    return (
      <div>
        <h1>Oh...</h1>
        <p>{`The project could not be found :(`}</p>
      </div>
    );


  return (
    <Page>
      <Head>
        <title>{prismicH.asText(project.data.title)}</title>
      </Head>
      <Bounded className="pb-0" innerClassName="pb-0">
        <Link href="/" className="font-semibold tracking-tight text-slate-400 pb-8">
          &larr; Back
        </Link>
      </Bounded>

      <Bounded noYPadding>
        <Heading className="py-0">
          <PrismicText field={project.data.title} />
        </Heading>
      </Bounded>

      <article>
        <SliceZone slices={project.data.slices} components={components} />
      </article>
    </Page>
  );
};


export default Project;
