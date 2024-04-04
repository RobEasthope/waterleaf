import { BsBrush } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'Stock',
  title: 'Stock',
  type: 'document',
  icon: BsBrush,
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
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'stockType',
      name: 'Stock type',
      type: 'string',
      options: {
        list: [{ title: 'Map', value: 'map' }],
      },
      initialValue: 'map',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'singleItem',
      title: 'singleItem',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
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
      title: 'maker',
      name: 'Cartographer/Author',
      type: 'reference',
      to: [{ type: 'Maker' }],
    }),
    defineField({
      title: 'collections',
      name: 'Collection(s)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Collection' }],
        },
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'number',
    }),
    defineField({
      name: 'stockDescription',
      title: 'Stock Description',
      type: 'StockProse',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      title: 'dimensions',
      name: 'Dimensions',
      description: 'Width and height of the image in cm',
      type: 'object',
      fields: [
        { name: 'width', title: 'Width', type: 'number' },
        { name: 'height', title: 'Hight', type: 'number' },
      ],
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
