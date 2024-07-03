import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "Header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "rawHeaderNavigation",
      title: "Header navigation",
      type: "array",
      of: [
        defineArrayMember({ type: "InternalLinkWithTitle" }),
        defineArrayMember({ type: "ExternalLinkWithTitle" }),
        defineArrayMember({ type: "EmailLinkWithTitle" }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
      };
    },
  },
});
