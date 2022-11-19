import React, { FunctionComponent } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

export const Quote: FunctionComponent<QuoteProps> = ({ slice }) => {
  return (
    <Bounded as="section" size="wide">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <div className="font-serif text-3xl italic leading-relaxed">
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Quote;
