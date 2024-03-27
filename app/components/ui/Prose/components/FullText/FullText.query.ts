import groq from 'groq';

import { INTERNAL_LINK_QUERY } from '~/components/navigation/InternalLink/InternalLink.query';

export const FULL_TEXT_QUERY = groq`
  ...,
  markDefs[]{
    ...,
    ${INTERNAL_LINK_QUERY},
  },
`;