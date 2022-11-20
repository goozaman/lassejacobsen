import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../prismicio";
import { Page } from "../components/Page";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import Article from "../components/Article";

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

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: React.FC<HomeProps> = ({ articles, about }) => {
  return (
    <Page>
      <div className="flex flex-col gap-8">
        <div>
          {about.data.profile && (
            <PrismicNextImage
              className="mx-auto w-40 rounded-full p-4"
              field={about.data.profile}
            />
          )}
        </div>
        <div className="spin flex flex-col items-center">
          <h1>Christian Lebeck</h1>
          <span>Doing something</span>
        </div>
      </div>

      <div>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
          // <PrismicText key={article.id} field={article.data.title} />
          // <div key={article.id}/>
        ))}
      </div>
    </Page>
  );
};

export default Home;
