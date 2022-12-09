import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { FunctionComponent } from "react";
import {
  ImageSlice,
  ProjectDocument,
  ProjectDocumentData,
} from "../.slicemachine/prismicio";
import { Heading } from "./Heading";
import * as prismicH from "@prismicio/helpers";

interface ProjectPreviewProps {
  project: ProjectDocument<string>;
}

export const ProjectPreview: FunctionComponent<ProjectPreviewProps> = ({
  project,
}) => {
  if (!project.data.show) return null;

  const featuredImage =
    (prismicH.isFilled.image(project.data.featuredImage) &&
      project.data.featuredImage) ||
    findFirstImage(project.data.slices);

  return (
    <div className="flex w-full flex-col justify-between md:max-w-[40%]">
      {/* <PrismicLink document={project} className="mb-4"> */}
      {prismicH.isFilled.image(featuredImage) && (
        <PrismicNextImage field={featuredImage} />
      )}
      {/* </PrismicLink> */}
      <div className="mb-6">
        <Heading as="h3" size="2xl" className="mb-4">
          {/* <PrismicLink document={project}> */}
          <PrismicText field={project.data.title} />
          {/* </PrismicLink> */}
        </Heading>
        <PrismicText field={project.data.featuredText} />
      </div>
    </div>
  );
};

const findFirstImage = (slices: ProjectDocumentData["slices"]) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image") as
    | ImageSlice
    | undefined;

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};
