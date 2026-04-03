import { ReactNode } from "react";

export type Tag = {
  text: string;
  href: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
};

export interface TagsProps {
  tags: Tag[];
}
