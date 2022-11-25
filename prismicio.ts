import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

export const repositoryName = sm.apiEndpoint;

const routes = [
  {
    type: "article",
    path: "/articles/:uid",
  },
  {
    type: "project",
    path: "/projects/:uid",
  },
];

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, { routes, ...config });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
