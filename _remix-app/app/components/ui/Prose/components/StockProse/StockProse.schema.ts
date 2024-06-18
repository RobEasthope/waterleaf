import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'StockProse',
  title: 'Stock prose',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          { type: 'InternalLink' },
          { type: 'ExternalLink' },
          { type: 'EmailLink' },
        ],
      },
    }),
  ],
});
