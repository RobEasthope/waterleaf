import { RxLayers } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'Collection',
  title: 'Collection',
  type: 'document',
  icon: RxLayers,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }: TitleListPreviewProps) {
      return {
        title: title || 'Unnamed Collection',
        subtitle: title && 'Collection',
      };
    },
  },
});
