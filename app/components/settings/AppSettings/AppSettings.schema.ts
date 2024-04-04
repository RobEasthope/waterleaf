import { RxInfoCircled } from 'react-icons/rx';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'AppSettings',
  title: 'AppSettings',
  type: 'document',
  icon: RxInfoCircled,
  fields: [
    defineField({
      name: 'appTitle',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'App settings',
      };
    },
  },
});
