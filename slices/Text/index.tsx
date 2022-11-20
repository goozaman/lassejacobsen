import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Bounded } from "../../components/Bounded";
import * as prismicH from "@prismicio/helpers";

type TextProps = SliceComponentProps<Content.TextSlice>;

export const Text: React.FC<TextProps> = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
