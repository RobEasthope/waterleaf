import { useLiveMode } from "@sanity/react-loader";

import { client } from "~/components/sanity/client";
import { STUDIO_BASEPATH } from "~/components/sanity/constants";

const liveClient = client.withConfig({
  stega: {
    enabled: true,
    studioUrl: STUDIO_BASEPATH,
  },
});

// Default export required for lazy loading
// eslint-disable-next-line import/no-default-export
export default function SanityLiveMode() {
  useLiveMode({ client: liveClient });

  return null;
}
