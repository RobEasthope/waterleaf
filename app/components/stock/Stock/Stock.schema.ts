import { RxLayers } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

export const StockSchema = defineType({
  name: 'Stock',
  title: 'Stock',
  type: 'document',
  icon: RxLayers,
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
