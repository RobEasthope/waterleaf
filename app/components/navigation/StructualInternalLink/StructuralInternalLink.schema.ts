import { RiLinksLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import type { TitleAndSubTitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'StructuralInternalLink',
  title: 'Structual internal link',
  type: 'document',
  description: 'Link to a document on the site',
  icon: RiLinksLine,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: TitleAndSubTitleListPreviewProps) {
      return {
        title: title || 'Structural internal link',
        subtitle: 'Structural internal link' || '',
      };
    },
  },
});
