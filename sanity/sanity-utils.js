import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "fazkji23",
    dataset: "production",
    apiVersion: "1",
  });

  return client.fetch(groq`*[_type == "project"]{
      _id,
      _createdAt,
      name, 
      "image": image.asset->url
  }`);
}
