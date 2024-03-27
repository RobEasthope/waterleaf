import { RxLayers } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export const Collection = defineType({
  name: 'Collection',
  title: 'Collection',
  type: 'document',
  icon: RxLayers,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
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
