import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./sanity/schemas";

const config = defineConfig({
  projectId: "4zxy3p3m",
  dataset: "production",
  title: "tcg",
  apiVersion: "2023-04-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default config;
