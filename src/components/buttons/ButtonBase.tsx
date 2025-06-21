// ButtonBase.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  className?: string;
};

export function ButtonBase({ className, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={className} {...props} />;
}
