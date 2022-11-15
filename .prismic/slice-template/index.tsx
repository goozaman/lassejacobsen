import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

type {{componentName}}Props = SliceComponentProps<Content.{{componentName}}Slice>;

const {{componentName}}: React.FC<{{componentName}}Props> = ({ slice }) => {
  return (
    <div>{{componentName}}: EDIT ME!</div>
  )
}

export default {{componentName}};
