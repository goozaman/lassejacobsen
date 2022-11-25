import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { Page } from "../../components/Page";
import Head from "next/head";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { getArticleDate } from "../../components/ArticlePreview";
import { HorizontalDivider } from "../../components/HorizontalDivider";
import { FunctionComponent } from "react";
import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

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
  const getArticle = async () => {
    if (!params) return undefined;
    return await client.getByUID("article", params.uid as string);
  };
  const article = await getArticle();

  const latestArticles = await client.getAllByType("article", {
    limit: 1,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: { article, latestArticles },
  };
};

type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Article: React.FC<ArticleProps> = ({
  article,
  latestArticles,
}) => {
  if (!article)
    return (
      <div>
        <h1>Oh...</h1>
        <p>{`The article could not be found :(`}</p>
      </div>
    );

  const date = getArticleDate(article);

  return (
    <Page>
      <Head>
        <title>{prismicH.asText(article.data.title)}</title>
      </Head>
      <Bounded>
        <Link href="/" className="font-semibold tracking-tight text-slate-400">
          &larr; Back to articles
        </Link>
      </Bounded>
      <article>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            <PrismicText field={article.data.title} />
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
      {latestArticles.length > 0 && (
        <Bounded>
          <div className="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <HorizontalDivider />
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest articles
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Page>
  );
};

const LatestArticle: FunctionComponent<
  Omit<ArticleProps, "latestArticles">
> = ({ article }) => {
  if (!article) return null;

  const date = getArticleDate(article);

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <Link href={article.url ?? `/articles/${article.uid}`}>
          <PrismicText field={article.data.title} />
        </Link>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
};

export default Article;
