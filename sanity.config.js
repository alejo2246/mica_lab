import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";
// import { visionTool } from "sanity/vision";

const config = defineConfig({
  name: "default",
  title: "micalab-cms",

  projectId: "fazkji23",
  dataset: "production",
  apiVersion: "1",
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: [project],
  },
});

export default config;
