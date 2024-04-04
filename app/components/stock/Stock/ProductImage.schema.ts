import { RxImage } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

import { TitleListPreviewProps } from '~/types/listPreviews';

export default defineType({
  name: 'ProductImage',
  title: 'Product Image',
  type: 'document',
  icon: RxImage,

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: TitleListPreviewProps) {
      return {
        title: title || 'Product image',
        subtitle: title && 'Product image',
      };
    },
  },
});
