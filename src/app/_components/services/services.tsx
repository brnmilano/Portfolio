import styles from "./services.module.scss";
import { Title } from "@/components/ui/Title";
import { TitleSizes } from "@/components/ui/Title/title.types";
import { Text, TextSizes } from "@/components/ui/Text";
import { ServiceCard } from "./ServiceCard";
import { SERVICES_DATA, SERVICES_TITLE, SERVICES_SUBTITLE } from "./constants";

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Text
          text={SERVICES_SUBTITLE}
          size={TextSizes.MEDIUM}
          color="var(--red)"
        />

        <Title
          text={SERVICES_TITLE}
          size={TitleSizes.MEDIUM}
          color="var(--white)"
        />
      </div>

      <div className={styles.grid}>
        {SERVICES_DATA.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            Icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
