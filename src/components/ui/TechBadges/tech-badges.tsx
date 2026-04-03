import styles from "./tech-badges.module.scss";
import { TechBadgesProps } from "./tech-badges.types";

export function TechBadges(props: TechBadgesProps) {
  const { badges, className } = props;

  return (
    <section className={`${styles.container} ${className || ""}`}>
      {badges.map((badge, index) => (
        <div key={index} className={styles.badge}>
          <span className={styles.icon}>{badge.icon}</span>
          <span className={styles.text}>{badge.text}</span>
        </div>
      ))}
    </section>
  );
}
