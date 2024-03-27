import EmailLinkSchema from '~/components/navigation/EmailLink/EmailLink.schema';
import EmailLinkWithTitleSchema from '~/components/navigation/EmailLink/EmailLinkWithTitle.schema';
import ExternalLinkSchema from '~/components/navigation/ExternalLink/ExternalLink.schema';
import ExternalLinkWithTitleSchema from '~/components/navigation/ExternalLink/ExternalLinkWithTitle.schema';
import InternalLinkSchema from '~/components/navigation/InternalLink/InternalLink.schema';
import InternalLinkWithTitleSchema from '~/components/navigation/InternalLink/InternalLinkWithTitle.schema';
import { AppSettings } from '~/components/settings/AppSettings/AppSettings.schema';
import { Collection } from '~/components/stock/Collection/Collection.schemas';
import { Maker } from '~/components/stock/Maker/Maker.schema';
import { Stock } from '~/components/stock/Stock/Stock.schema';

export const schemasIndex = [
  // Links
  EmailLinkSchema,
  EmailLinkWithTitleSchema,
  ExternalLinkSchema,
  ExternalLinkWithTitleSchema,
  InternalLinkSchema,
  InternalLinkWithTitleSchema,
  Stock,
  Maker,
  Collection,
  AppSettings,
];
