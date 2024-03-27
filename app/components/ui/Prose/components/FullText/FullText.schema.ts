import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'FullText',
  title: 'Full text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Large heading', value: 'h2' },
        { title: 'Medium heading', value: 'h3' },
        { title: 'Small heading', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          { type: 'InternalLink' },
          { type: 'ExternalLink' },
          { type: 'EmailLink' },
        ],
      },
    }),
    defineArrayMember({ type: 'Image' }),
    defineArrayMember({ type: 'YoutubeVideo' }),
  ],
});
