import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

type {{componentName}}Props = SliceComponentProps<Content.{{componentName}}Slice>;

const {{componentName}}: React.FC<{{componentName}}Props> = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
  </section>
)

export default Text