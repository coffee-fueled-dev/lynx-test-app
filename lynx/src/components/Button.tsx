import type { ViewProps } from "@lynx-js/types";
import type { FC } from "@lynx-js/react";
import { cn } from "../util/cn.js";

export interface ButtonProps extends Omit<ViewProps, "focusable"> {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "primary" | "ghost";
}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  variant,
  ...props
}) => (
  <view
    class={cn(
      "btn inline-block",
      btnSize(size),
      btnVariant(variant),
      props.class,
      props.className
    )}
    focusable={true}
    focus-index="0, 0"
    {...props}
  >
    <text>{children}</text>
  </view>
);

const btnSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return "btn-sm";
    case "lg":
      return "btn-lg";
    default:
      return "btn-md";
  }
};

const btnVariant = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "ghost":
      return "btn-ghost";
    case "outline":
      return "btn-outline";
    default:
      return "btn-primary";
  }
};
