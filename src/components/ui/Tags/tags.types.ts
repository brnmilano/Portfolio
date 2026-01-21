import { ReactNode } from "react";

export type Tags = {
  text: string;
  icon?: ReactNode;
};

export interface TagsProps {
  tags: Tags[];
  /** Classe opcional para customizar o container externo (ex.: grid do pai) */
  className?: string;
}
