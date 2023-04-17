import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project, Tech } from "@/types";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "mobileImage": mobileImage.asset->url,
        "tech": tech[]->{title},
        demo,
        code,
        // "description": description[0].children[0].text
        description,

    }`
  );
}
export async function getTech(): Promise<Tech[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "tech"]{
        _id,
        title,
        "slug": slug.current,
        experience,

    }`
  );
}
