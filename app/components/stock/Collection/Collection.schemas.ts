import { RxLayers } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

export const CollectionSchema = defineType({
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
    prepare({ title }: { title: string }) {
      return {
        title,
        subtitle: title || 'Unnamed collection',
      };
    },
  },
});
