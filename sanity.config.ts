import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { defineLocations, presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { STUDIO_BASEPATH } from "~/components/sanity/constants";
import { locate } from "~/components/sanity/presentation/locate";
import { projectDetails } from "~/components/sanity/projectDetails";
import schema from "~/components/sanity/sanity.schema";
import {
  defaultDocumentNode,
  structure,
} from "~/components/sanity/sanity.structure";

export default defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/resource/preview",
        },
      },
      resolve: {
        locations: {
          record: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: `/records/${doc?.slug}`,
                },
                { title: "Home", href: `/` },
              ],
            }),
          }),
        },
      },
    }),
    visionTool(),
  ],
  basePath: STUDIO_BASEPATH,
  schema: {
    types: schema,
  },
});
