import { BiText } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "TextBlock",
  title: "Text block",
  icon: BiText,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "FullProse",
      validation: (Rule) =>
        Rule.required().warning("Text block: Text is missing"),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Text block",
      };
    },
  },
});
