import { defineField, defineType } from "sanity";

import Duration from "~/components/sanity/components/Duration/Duration";
import { secondsToMinutes } from "~/utils/secondsToMinutes";

export const trackType = defineType({
  name: "track",
  title: "Track",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "duration",
      description: "Time in seconds",
      type: "number",
      components: {
        input: Duration,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      duration: "duration",
    },
    prepare({ title, duration }: { title: string; duration: number }) {
      return {
        title,
        subtitle: secondsToMinutes(duration),
      };
    },
  },
});
