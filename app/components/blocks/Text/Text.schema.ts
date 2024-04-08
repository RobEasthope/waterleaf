import { BiText } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

export default defineType({
  type: 'object',
  name: 'Text',
  title: 'Text',
  icon: BiText,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'FullText',
      validation: (Rule) => Rule.required().warning('Text: Text is missing'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Text',
      };
    },
  },
});
