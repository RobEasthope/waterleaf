import { BsBrush } from 'react-icons/bs';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'Stock',
  title: 'Stock',
  type: 'document',
  icon: BsBrush,
  fieldsets: [
    { name: 'dimensions', title: 'Dimensions', options: { columns: 2 } },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required().error(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stockType',
      title: 'Stock type',
      type: 'string',
      options: {
        list: [{ title: 'Map', value: 'map' }],
      },
      initialValue: 'map',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'singleItem',
      title: 'Single item',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      hidden: ({ parent, value }) => !value && parent?.singleItem,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sold',
      title: 'Sold',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'maker',
      title: 'Cartographer/Author',
      type: 'reference',
      to: [{ type: 'Maker' }],
      validation: (Rule) => Rule.required().error(),
    }),
    defineField({
      name: 'collections',
      title: 'Collection(s)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Collection' }],
        },
      ],
      validation: (Rule) => Rule.required().error(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'number',
      validation: (Rule) => Rule.required().error(),
    }),
    defineField({
      name: 'description',
      title: 'Full stock description',
      type: 'StockProse',
      validation: (Rule) => Rule.required().error(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({ type: 'StockImage' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      fieldset: 'dimensions',
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      fieldset: 'dimensions',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stockId',
      title: 'Stock ID',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: TitleListPreviewProps) {
      return {
        title: title || 'Unnamed Stock',
        subtitle: title && 'Stock',
      };
    },
  },
});
