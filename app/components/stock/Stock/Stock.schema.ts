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
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
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
