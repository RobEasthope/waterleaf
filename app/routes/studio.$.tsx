import '~/sanity/studio.css';

import type { MetaFunction } from '@remix-run/node';
import { Studio } from 'sanity';

import { Hydrated } from '~/components/base/Hydrated/Hydrated';

import { config } from '../../sanity.config';

export const meta: MetaFunction = () => [
  { title: 'Sanity Studio' },
  { name: 'robots', content: 'noindex' },
];

export default function StudioPage() {
  return (
    <Hydrated>
      <Studio
        config={config}
        // To enable guests view-only access to your Studio,
        // uncomment this line!
        // unstable_noAuthBoundary
      />
    </Hydrated>
  );
}
