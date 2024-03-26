import { BsBrush } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';

export const Stock = defineType({
  name: 'Stock',
  title: 'Stock',
  type: 'document',
  icon: BsBrush,
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
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }: { title: string }) {
      return {
        title,
        subtitle: title || 'Unnamed stock item',
      };
    },
  },
});
