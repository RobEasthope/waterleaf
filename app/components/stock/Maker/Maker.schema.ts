import { RxAvatar } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'Maker',
  title: 'Naker',
  type: 'document',
  icon: RxAvatar,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
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
        title: title || 'Unnamed Cartographer/Author',
        subtitle: title && 'Cartographer/Author',
      };
    },
  },
});
