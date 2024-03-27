import { createElement, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, stylesCheck } from "@/utils/tailwind";

const boxVariants = cva(
  // Base styles
  null,
  {
    variants: {
      blockSpacing: {
        true: "px-1 md:px-2 print:px-0 print:md:px-0",
      },
      breakout: {
        true: "max-w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen",
      },
      columns: {
        null: "",
        "1": "grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1",
        "2": "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
        "3": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
        "4": "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4",
        "5": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
      },
      maxWidth: {
        none: "",
        auto: "max-w-auto",
        small: "max-w-lg",
        text: "max-w-prose",
        medium: "max-w-5xl",
        large: "max-w-7xl",
        full: "w-screen",
      },
    },
    defaultVariants: {
      maxWidth: null,
    },
  },
);

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  as: string;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as = "div",
      className,
      blockSpacing,
      breakout,
      columns,
      maxWidth,
      children,
      ...props
    },
    ref,
  ) => {
    if (!children) return null;

    return createElement(
      as,
      {
        className: stylesCheck(
          cn(
            boxVariants({ blockSpacing, breakout, columns, maxWidth }),
            className,
          ),
        ),
        ref,
        ...props,
      },
      children,
    );
  },
);

Box.displayName = "Box";

export { Box, boxVariants };
