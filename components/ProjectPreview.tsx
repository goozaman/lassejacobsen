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


  return (
    <div className="flex w-full flex-col justify-between md:max-w-[40%]">
  
        <img src={project.image} />

      <div className="mb-6">
        <Heading as="h3" size="2xl" className="mb-4">

           {project.title}

        </Heading>
        {project.featuredText} 
        {project.link && (<br/>)}
        {project.link && (<br/>)}
        {project.link && (
          <a href={project.link} style={{color:"blue",textDecoration:"underline"}} >{project.linktext}</a>)}
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
