import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

type TextProps = SliceComponentProps<Content.TextSlice>;

export const Text: React.FC<TextProps> = ({ slice }) => {
  
  return (
    <section>
      <span className="title">
        {
          slice.primary.content ?
          <PrismicRichText field={slice.primary.content}/>
          : <h2>Template slice, update me!</h2>
        }
      </span>
    </section>
  )
}

export default Text