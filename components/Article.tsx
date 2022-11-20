import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Heading } from "./Heading";
import { Content } from "@prismicio/client";
import { FunctionComponent } from "react";
import {
  ArticleDocument,
  ArticleDocumentData,
  ImageSlice,
  TextSlice,
} from "../.slicemachine/prismicio";
import Link from "next/link";

export interface ArticleProps {
  article: Content.ArticleDocument<string>;
}

export type DateOrTimestampField =
  | `${number}-${number}-${number}`
  | `${number}-${number}-${number}T${number}:${number}:${number}+${number}`
  | null
  | undefined;

export const getArticleDate = (article: Content.ArticleDocument<string>) =>
  prismicH.asDate(
    article.data.publishDate ||
      (article.first_publication_date as DateOrTimestampField)
  ) as Date;

const Article: FunctionComponent<ArticleProps> = ({ article }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = getArticleDate(article);
  const excerpt = getExcerpt(article.data.slices);

  console.log(article);

  return (
    <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
      <Link href={article.url ?? `/articles/${article.uid}`} tabIndex={-1}>
        <div className="aspect-w-4 aspect-h-3 relative bg-gray-100">
          {prismicH.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              fill={false}
              className="object-cover"
            />
          )}
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2">
        <Heading as="h2">
          <Link href={article.url ?? `/articles/${article.uid}`} tabIndex={-1}>
            <PrismicText field={article.data.title} />
          </Link>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </li>
  );
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const findFirstImage = (slices: ArticleDocumentData["slices"]) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image") as
    | ImageSlice
    | undefined;

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const getExcerpt = (slices: ArticleDocumentData["slices"]) => {
  const textSlices = slices.filter(
    (slice) => slice.slice_type === "text"
  ) as TextSlice[];
  const text = textSlices
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

export default Article;
