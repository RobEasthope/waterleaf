import { RxAvatar } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

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
    prepare({ title }: { title: string }) {
      return {
        title,
        subtitle: title || 'Unnamed maker',
      };
    },
  },
});
