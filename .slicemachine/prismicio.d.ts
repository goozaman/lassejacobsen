// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Profile field in *About*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.profile
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *About*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: about.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<AboutDocumentDataSlicesSlice>;
}
/**
 * Slice for *About → Slice Zone*
 *
 */
type AboutDocumentDataSlicesSlice = TextSlice;
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Article documents */
interface ArticleDocumentData {
    /**
     * Title field in *Article*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the article
     * - **API ID Path**: article.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Publish Date field in *Article*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: article.publishDate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishDate: prismicT.DateField;
    /**
     * Featured Image field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.featuredImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featuredImage: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Article*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: article.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticleDocumentDataSlicesSlice>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice = TextSlice | ImageSlice | QuoteSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticleDocumentData>, "article", Lang>;
/** Content for Contact documents */
interface ContactDocumentData {
    /**
     * Image field in *Contact*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
}
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContactDocumentData>, "contact", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Hero Title field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.heroTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heroTitle: prismicT.TitleField;
    /**
     * Hero Text field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.heroText
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heroText: prismicT.RichTextField;
    /**
     * Hero Image field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.heroImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    heroImage: prismicT.ImageField<never>;
}
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Navigation documents */
type NavigationDocumentData = Record<string, never>;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Featured Image field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.featuredImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featuredImage: prismicT.ImageField<never>;
    /**
     * Featured Text field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.featuredText
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    featuredText: prismicT.RichTextField;
    /**
     * Approximate End Date field in *Project*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: project.endDate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    endDate: prismicT.DateField;
    /**
     * Show field in *Project*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: project.show
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show: prismicT.BooleanField;
    /**
     * Current Project field in *Project*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: project.currentProject
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    currentProject: prismicT.BooleanField;
    /**
     * Slice Zone field in *Project*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: project.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ProjectDocumentDataSlicesSlice>;
}
/**
 * Slice for *Project → Slice Zone*
 *
 */
type ProjectDocumentDataSlicesSlice = TextSlice | ImageSlice | QuoteSlice;
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
export type AllDocumentTypes = AboutDocument | ArticleDocument | ContactDocument | HomeDocument | NavigationDocument | ProjectDocument;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Item in Image → Items
 *
 */
export interface ImageSliceDefaultItem {
    /**
     * Image field in *Image → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.items[].caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, Simplify<ImageSliceDefaultItem>>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavItemSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Name of the link
     * - **API ID Path**: nav_item.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: nav_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavItemSliceDefaultPrimary>, never>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavItemSliceVariation = NavItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `nav_item`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavItemSlice = prismicT.SharedSlice<"nav_item", NavItemSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
    /**
     * Quote field in *Quote → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Quote without quotation marks
     * - **API ID Path**: quote.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.RichTextField;
    /**
     * Source field in *Quote → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Source of the quote
     * - **API ID Path**: quote.primary.source
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    source: prismicT.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuoteSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with rich formatting
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocumentDataSlicesSlice, AboutDocument, ArticleDocumentData, ArticleDocumentDataSlicesSlice, ArticleDocument, ContactDocumentData, ContactDocument, HomeDocumentData, HomeDocument, NavigationDocumentData, NavigationDocument, ProjectDocumentData, ProjectDocumentDataSlicesSlice, ProjectDocument, AllDocumentTypes, ImageSliceDefaultPrimary, ImageSliceDefaultItem, ImageSliceDefault, ImageSliceVariation, ImageSlice, NavItemSliceDefaultPrimary, NavItemSliceDefault, NavItemSliceVariation, NavItemSlice, QuoteSliceDefaultPrimary, QuoteSliceDefault, QuoteSliceVariation, QuoteSlice, TextSliceDefaultPrimary, TextSliceDefault, TextSliceVariation, TextSlice };
    }
}
