import { RiLinksLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

import type { TitleAndSubTitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'HardcodedInternalLink',
  title: 'Hardcoded internal link',
  type: 'document',
  description: 'Link to a hardcoded section on the site',
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
      subtitle: 'url',
    },
    prepare({ title, subtitle }: TitleAndSubTitleListPreviewProps) {
      return {
        title: title || 'Hardcoded internal link',
        subtitle: subtitle || 'Hardcoded internal link',
      };
    },
  },
});
