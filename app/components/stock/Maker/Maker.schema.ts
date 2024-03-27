import { RxAvatar } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export const Maker = defineType({
  name: 'Maker',
  title: 'Naker',
  type: 'document',
  icon: RxAvatar,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
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
        title: title || 'Unnamed Cartographer/Author',
        subtitle: title && 'Cartographer/Author',
      };
    },
  },
});
