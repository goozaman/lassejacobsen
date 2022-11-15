import React from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

type NavItemProps = SliceComponentProps<Content.NavItemSlice>;

const NavigationItem: React.FC<NavItemProps> = ({ slice }) => {
  return (
    <div>Nav</div>
  )
}

export default NavigationItem;