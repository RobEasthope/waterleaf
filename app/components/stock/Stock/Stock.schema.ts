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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stockId',
      title: 'Stock ID',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'number',
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
