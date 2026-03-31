import { Card } from "@/components/ui/Card";
import { IconProps } from "@/types/icons";
import { ComponentType } from "react";
import styles from "./service-card.module.scss";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <Card title={title} description={description} services>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
    </Card>
  );
}
