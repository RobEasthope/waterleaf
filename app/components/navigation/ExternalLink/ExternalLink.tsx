import React from "react";

import { cn } from "~/utils/tailwind";

// Schema props
export type ExternalLinkWithTitleSchemaProps = {
  _type: "ExternalLinkWithTitle";
  _key: string;
  title: string;
  url: string;
};

export type ExternalLinkSchemaProps = {
  _type: "ExternalLinkSansTitle";
  _key: string;
  newTab: boolean;
  url: string;
};

// Component props
export type ExternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string | null;
  className?: string;
  children: React.ReactNode;
};

export function ExternalLink({
  href,
  children,
  className,
  ...rest
}: ExternalLinkProps) {
  if (!href && !children) {
    return null;
  }

  if (!href) {
    return <span className={className}>{children || null}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, "hover:text-saffron duration-300")}
      {...rest}
    >
      {children || null}
    </a>
  );
}
