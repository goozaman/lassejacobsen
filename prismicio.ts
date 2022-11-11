import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export const repositoryName = "christianlebeck";

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}