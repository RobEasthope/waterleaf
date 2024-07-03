import { BsBrush } from "react-icons/bs";
import { defineArrayMember, defineField, defineType } from "sanity";

import { TitleListPreviewProps } from "~/types/listPreviews";

export default defineType({
  name: "Stock",
  title: "Stock",
  type: "document",
  icon: BsBrush,
  groups: [
    {
      name: "description",
      title: "Description",
    },
    {
      name: "imagery",
      title: "Imagery",
    },
    {
      name: "config",
      title: "Commerce",
    },
  ],
  fieldsets: [
    { name: "dimensions", title: "Dimensions", options: { columns: 2 } },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Full stock description",
      type: "StockProse",
      description: "Full description of the stock item",
      group: "description",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "Stock imagery",
      of: [defineArrayMember({ type: "StockImage" })],
      group: "imagery",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "officialTitle",
      title: "Official title",
      description:
        "Official title for the item as referenced in the literature",
      type: "string",
      group: "description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "string",
      group: "description",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "maker",
      title: "Cartographer/Author",
      type: "reference",
      to: [{ type: "Maker" }],
      group: "description",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "number",
      group: "description",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      group: "description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
      group: "description",
      fieldset: "dimensions",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
      group: "description",
      fieldset: "dimensions",
    }),
    defineField({
      name: "collections",
      title: "Collection(s)",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "Collection" }],
        },
      ],
      validation: (Rule) =>
        Rule.required().warning("Please add to a collection "),
    }),
    defineField({
      name: "stockType",
      title: "Stock type",
      type: "string",
      options: {
        list: [
          { value: "map", title: "Map" },
          { value: "print", title: "Print" },
          { value: "book", title: "Book" },
        ],
      },
      initialValue: "map",
      group: "config",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "singleItem",
      title: "Single item",
      type: "boolean",
      initialValue: true,
      group: "config",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
      group: "config",
      hidden: ({ parent, value }) => !value && parent?.singleItem,
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: false,
      group: "config",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sold",
      title: "Sold",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      group: "config",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stockId",
      title: "Stock ID",
      type: "string",
      group: "config",
      validation: (Rule) => Rule.required().warning(),
    }),
    defineField({
      name: "stripeId",
      title: "Stripe ID",
      type: "string",
      readOnly: true,
      group: "config",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: TitleListPreviewProps) {
      return {
        title: title || "Unnamed Stock",
        subtitle: title && "Stock",
      };
    },
  },
});
