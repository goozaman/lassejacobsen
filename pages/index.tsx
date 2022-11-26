import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../prismicio";
import { Page } from "../components/Page";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading } from "../components/Heading";
import { Bounded } from "../components/Bounded";
import { ProjectPreview } from "../components/ProjectPreview";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("article");
  const about = await client.getSingle("about");
  const home = await client.getSingle("home");
  const projects = await client.getAllByType("project", {
    orderings: {
      field: 'my.project.endDate',
      direction: 'desc',
    },
  });  

  return {
    props: { articles, about, home, projects },
  };
};

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: React.FC<HomePageProps> = ({
  articles,
  about,
  home,
  projects,
}) => {
  return (
    <Page>
      <Hero home={home} />

      <div className="min-h-[75vh]">
        <Bounded as="section" size="widest">
          <Heading as="h2" className="mb-5">
            Projects
          </Heading>
          <p className="mb-10">
            I like to try new things and gain different experiences. Check out
            some of the last projects, that I&apos;ve dedicated my time to.
          </p>

          <div className="flex flex-col flex-wrap justify-between gap-x-2 gap-y-6 md:flex-row">
            {projects.map((project) => (
              <ProjectPreview key={project.id} project={project} />
            ))}
          </div>
        </Bounded>
      </div>

      <div className="bg-slate-800 text-white">
        <Bounded as="section" size="widest">
          Contact me
        </Bounded>
      </div>
    </Page>
  );
};

const Hero: React.FC<Pick<HomePageProps, "home">> = ({ home }) => {
  return (
    <Bounded
      as="section"
      size="widest"
      noYPadding
      className="px-4 md:h-[calc(100vh-60px)]"
      innerClassName="h-full flex md:flex-row md:gap-0 gap-10 flex-col"
    >
      <div className="flex w-full flex-col pt-3 align-baseline md:w-1/2 md:pt-36 md:pr-12">
        <Heading as="h2">
          <PrismicText field={home.data.heroTitle} />
        </Heading>

        <div className="mt-6">
          <PrismicRichText field={home.data.heroText} />
        </div>
      </div>

      <div className="flex w-full items-end md:max-h-full md:w-1/2 md:pl-12">
        <PrismicNextImage
          className="max-h-full max-w-full object-contain"
          field={home.data.heroImage}
        />
      </div>

      <div className="absolute bottom-0 left-[calc(50%-6px)] text-2xl">↓</div>
    </Bounded>
  );
};

export default HomePage;
