import { BsBrush } from 'react-icons/bs';
import { RiCompasses2Line, RiQuillPenLine } from 'react-icons/ri';
import { RxAvatar, RxGear, RxLayers } from 'react-icons/rx';
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
      S.documentTypeListItem('Page').title('Pages').icon(RiQuillPenLine),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .icon(RiCompasses2Line)
        .child(
          S.list()
            .title('Navigation')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Header')
                .child(S.document().schemaType('Header').documentId('Header')),
            ]),
        ),
      S.listItem()
        .title('Settings')

        .icon(RxGear)
        .child(
          S.list()
            .title('Settings')
            .showIcons(false)
            .items([
              S.documentListItem()
                .schemaType('AppSettings')
                .icon(RxGear)
                .id('AppSettings')
                .title('App settings'),
            ]),
        ),
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
    case `Page`:
      return S.document().views([S.view.form(), OGPreviewView]);
    default:
      return S.document().views([S.view.form()]);
  }
};
