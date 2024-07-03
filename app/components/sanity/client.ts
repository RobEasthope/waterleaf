import { createClient } from "@sanity/client";

import {
  apiVersion,
  dataset,
  projectId,
} from "~/components/sanity/projectDetails";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
