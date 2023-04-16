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

export async function getProduct(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        shortname,
        "slug": slug.current,
        desc,
        feat,
        price,
        "gallery": gallery[].asset->url,
        includes,
        "relatedProducts": relatedProducts[]->{
                _id,
                title,
                shortname,
                "slug": slug.current,
                "mobileImage": mobileImage.asset->url,

              },
        "mainImage": mainImage.asset->url,
        "mobileImage": mobileImage.asset->url,
        "category": category->title,
        "categorySlug": category->slug
      }`,
    { slug }
  );
}
