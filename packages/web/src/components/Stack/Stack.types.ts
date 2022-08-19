import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "../Polymorphic";

export type StackStyledProps = {
  /** 
   * The gutter between the children of the `Stack` 
   */
  gap?: number | string;
  /** 
   * When `true` the gap will be recursively applied to all of the children of the stack
   * not just its' direct children.
   */
  recursive?: boolean;
};

export type StackProps<E extends ElementType = "div"> =
  PolymorphicComponentProps<E, StackStyledProps>;
