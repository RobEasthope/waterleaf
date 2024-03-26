import { presentationTool } from '@sanity/presentation';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { locate } from '~/sanity/presentation/locate';
import { frontendUrl, projectDetails } from '~/sanity/projectDetails';
import { schemasIndex } from '~/sanity/schemasIndex';
import { defaultDocumentNode, structure } from '~/sanity/studioStructure';

export const config = defineConfig({
  ...projectDetails(),
  name: 'waterleaf',
  title: 'Waterleaf',
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: frontendUrl,
      locate,
    }),
    visionTool(),
  ],
  basePath: `/studio`,
  schema: {
    types: schemasIndex,
  },
});
