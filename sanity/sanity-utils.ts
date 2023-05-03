import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project, Service, Tech } from "@/types";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        title,
        description,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }`
  );
}

export async function getServices(): Promise<Service[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service"]{
        _id,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        description
    }`
  );
}

export async function getService(slug: string): Promise<Service> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "heroImage": heroImage.asset->url,
        description,
        serviceDetails
    }`,
    { slug }
  );
}
