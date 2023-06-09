import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import * as prismicH from "@prismicio/helpers";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image: React.FC<ImageProps> = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size="widest">
      {" "}
      {/* size={slice.variation === "wide" ? "widest" : "base"}> */}
      <figure className="grid grid-cols-1 gap-4">
        {prismicH.isFilled.image(image) && (
          <div className="bg-gray-100">
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;
