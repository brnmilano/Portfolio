import { ReactNode } from "react";

export type TechBadge = {
  text: string;
  icon: ReactNode;
};

export interface TechBadgesProps {
  badges: TechBadge[];
  className?: string;
}
