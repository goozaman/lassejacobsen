import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export async function getStaticPaths() {
  const client = createClient();
  const articles = await client.getAllByType("article");

  const paths = articles.map((article) => prismicH.asLink(article));

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
  console.log(params);

  const getArticle = async () => {
    if (!params) return undefined;
    const { uid } = params;
    return await client.getByUID("article", uid as string);
  };

  const article = await getArticle();
  return {
    props: { article },
  };
};

type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Article: React.FC<ArticleProps> = ({ article }) => {
  if (!article)
    return (
      <div>
        <h1>Oh...</h1>
        <p>{`The article could not be found :(`}</p>
      </div>
    );

  return (
    <div>
      <h1>{article.data.title}</h1>
      <SliceZone slices={article.data.slices} components={components} />
    </div>
  );
};

export default Article;
