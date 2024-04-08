import TextSchema from '~/components/blocks/Text/Text.schema';
import EmailLinkSchema from '~/components/navigation/EmailLink/EmailLink.schema';
import EmailLinkWithTitleSchema from '~/components/navigation/EmailLink/EmailLinkWithTitle.schema';
import ExternalLinkSchema from '~/components/navigation/ExternalLink/ExternalLink.schema';
import ExternalLinkWithTitleSchema from '~/components/navigation/ExternalLink/ExternalLinkWithTitle.schema';
import HardcodedInternalLinkSchema from '~/components/navigation/HardcodedInternalLink/HardcodedInternalLink.schema';
import HeaderSchema from '~/components/navigation/Header/Header.schema';
import InternalLinkSchema from '~/components/navigation/InternalLink/InternalLink.schema';
import InternalLinkWithTitleSchema from '~/components/navigation/InternalLink/InternalLinkWithTitle.schema';
import PageSchema from '~/components/pages/Page/Page.schema';
import AppSettingsSchema from '~/components/settings/AppSettings/AppSettings.schema';
import CollectionSchemas from '~/components/stock/Collection/Collection.schemas';
import MakerSchema from '~/components/stock/Maker/Maker.schema';
import StockSchema from '~/components/stock/Stock/Stock.schema';
import StockImageSchema from '~/components/stock/Stock/StockImage.schema';
import BasicProseSchema from '~/components/ui/Prose/components/BasicProse/BasicProse.schema';
import FullProseSchema from '~/components/ui/Prose/components/FullProse/FullProse.schema';
import StockProseSchema from '~/components/ui/Prose/components/StockProse/StockProse.schema';

export const schemasIndex = [
  // Links
  EmailLinkSchema,
  EmailLinkWithTitleSchema,
  ExternalLinkSchema,
  ExternalLinkWithTitleSchema,
  InternalLinkSchema,
  InternalLinkWithTitleSchema,
  HardcodedInternalLinkSchema,

  // Prose
  BasicProseSchema,
  FullProseSchema,
  StockProseSchema,

  // Navigation
  HeaderSchema,

  // Settings
  AppSettingsSchema,

  // Blocks
  TextSchema,

  // Pages
  PageSchema,

  // Stock
  StockImageSchema,
  StockSchema,
  MakerSchema,
  CollectionSchemas,
];
