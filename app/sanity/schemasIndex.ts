import EmailLinkSchema from '~/components/navigation/EmailLink/EmailLink.schema';
import EmailLinkWithTitleSchema from '~/components/navigation/EmailLink/EmailLinkWithTitle.schema';
import ExternalLinkSchema from '~/components/navigation/ExternalLink/ExternalLink.schema';
import ExternalLinkWithTitleSchema from '~/components/navigation/ExternalLink/ExternalLinkWithTitle.schema';
import InternalLinkSchema from '~/components/navigation/InternalLink/InternalLink.schema';
import InternalLinkWithTitleSchema from '~/components/navigation/InternalLink/InternalLinkWithTitle.schema';
import AppSettingsSchema from '~/components/settings/AppSettings/AppSettings.schema';
import CollectionSchemas from '~/components/stock/Collection/Collection.schemas';
import MakerSchema from '~/components/stock/Maker/Maker.schema';
import StockSchema from '~/components/stock/Stock/Stock.schema';

export const schemasIndex = [
  // Links
  EmailLinkSchema,
  EmailLinkWithTitleSchema,
  ExternalLinkSchema,
  ExternalLinkWithTitleSchema,
  InternalLinkSchema,
  InternalLinkWithTitleSchema,

  // Settings
  AppSettingsSchema,

  // Stock
  StockSchema,
  MakerSchema,
  CollectionSchemas,
];
