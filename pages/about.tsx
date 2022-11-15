import * as prismic from "@prismicio/client";
import { PrismicImage, SliceZone } from "@prismicio/react";
import { components } from "../slices";
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { createClient } from "../prismicio";
import { PrismicNextImage } from "@prismicio/next";


export const getStaticProps = async ({ previewData}: GetStaticPropsContext) => {
    const client = createClient({ previewData });
    const page = await client.getSingle("about");

    return {
        props: { page }
    }
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: React.FC<PageProps> = ({ page }) => {
    return (
        <div>
            {page.data.profile && (
                <PrismicNextImage field={page.data.profile}  />
            )}
            <SliceZone slices={page.data.slices} components={components} />
        </div>
    )
}

export default Page;