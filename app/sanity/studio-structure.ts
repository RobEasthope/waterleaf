import { BsBrush } from 'react-icons/bs';
import { RxAvatar, RxInfoCircled, RxLayers } from 'react-icons/rx';
import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
} from 'sanity/structure';

import OGPreview from '~/sanity/components/OGPreview/OGPreview';
import { resolveOGUrl } from '~/sanity/utils/resolveOGUrl';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('Stock').title('Stock').icon(BsBrush),
      S.divider(),
      S.documentTypeListItem('Collection').title('Collections').icon(RxLayers),
      S.documentTypeListItem('Maker')
        .title('Cartographers/Authors')
        .icon(RxAvatar),
      S.divider(),
      S.documentListItem()
        .schemaType('AppSettings')
        .icon(RxInfoCircled)
        .id('AppSettings')
        .title('App settings'),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType, documentId },
) => {
  const OGPreviewView = S.view
    .component(OGPreview)
    .options({
      url: resolveOGUrl(documentId),
    })
    .title('OG Preview');

  switch (schemaType) {
    case `Stock`:
      return S.document().views([S.view.form(), OGPreviewView]);
    default:
      return S.document().views([S.view.form()]);
  }
};
