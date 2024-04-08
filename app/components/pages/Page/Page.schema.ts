import { RiQuillPenLine } from 'react-icons/ri';
import { defineArrayMember, defineField, defineType } from 'sanity';

import type { TitleAndSubTitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'Page',
  title: 'Page',
  type: 'document',
  icon: RiQuillPenLine,
  fields: [
    defineField({
      name: 'name',
      title: 'Page name',
      type: 'string',
      description: 'Used for internal descriptive purposes only',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 30,
      },
      description: 'Set the page URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rawSections',
      title: 'Page blocks',
      type: 'array',
      of: [defineArrayMember({ type: 'Text' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadataTitle',
      title: 'Page title',
      description: 'Used in social media and search engine listings',
      type: 'text',
    }),
    defineField({
      name: 'metadataDescription',
      title: 'Page description',
      description: 'Used in social media and search engine listings',
      type: 'text',
    }),
    defineField({
      name: 'metadataImage',
      title: 'Page thumbnail',
      description: 'Used in social media and search engine listings.',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }: TitleAndSubTitleListPreviewProps) {
      return {
        title: title || 'Page',
        subtitle: title ? 'Page' : '',
      };
    },
  },
});
