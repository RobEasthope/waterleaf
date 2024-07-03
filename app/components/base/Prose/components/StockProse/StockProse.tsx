/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import type { PortableTextComponents } from "@portabletext/react";

import { EmailLink } from "~/components/navigation/EmailLink/EmailLink";
import { ExternalLink } from "~/components/navigation/ExternalLink/ExternalLink";
import { InternalLink } from "~/components/navigation/InternalLink/InternalLink";
import { Type } from "~/components/base/Type/Type";

export type StockProseProps = Array<SanityKeyed<SanityBlock>>;

export const StockProseComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <Type as="p">{children}</Type>,
  },
  marks: {
    // Text highlighting
    strong: ({ children }) => (
      <strong className="font-medium text-inherit">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-inherit">{children}</em>,

    // Links
    ExternalLink: ({ children, value }) => (
      <ExternalLink href={value.url}>{children}</ExternalLink>
    ),
    InternalLink: ({ children, value }) => (
      <InternalLink
        href={value?.page?.slug?.current}
        homePageSlug={value?.appSettings?.homePageSlug}
      >
        {children}
      </InternalLink>
    ),
    EmailLink: ({ children, value }) => (
      <EmailLink email={value?.email}>{children}</EmailLink>
    ),
  },
};
