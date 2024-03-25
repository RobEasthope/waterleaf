import { defineField, defineType } from 'sanity';

export const Stock = defineType({
  name: 'Stock',
  title: 'Stock',
  type: 'document',
  // icon: Users,
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
});
