import { FunctionComponent } from "react";
import { ProjectDocument } from "../.slicemachine/prismicio";

interface ProjectPreviewProps {
    project: ProjectDocument<string>;
}

export const ProjectPreview: FunctionComponent<ProjectPreviewProps> = ({ project }) => {
    console.log(project);
    
    return (
        <div/>
    )
}