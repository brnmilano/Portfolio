import { CardProps } from "./card.types";
import { Title } from "../Title";
import { TitleSizes } from "../Title/title.types";
import { Text, TextSizes } from "../Text";
import styles from "./card.module.scss";

export function Card({
  title,
  description,
  href,
  children,
  external = true,
  services = false,
}: CardProps) {
  const content = (
    <>
      {children}

      <div className={styles.content}>
        <Title text={title} size={TitleSizes.SMALL} color="var(--white)" />

        <Text
          text={description}
          size={TextSizes.SMALL}
          color="var(--gray-300)"
        />
      </div>
    </>
  );

  const containerClass = `${styles.container} ${services ? styles.services : ""}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className={containerClass}
      >
        {content}
      </a>
    );
  }

  return <div className={containerClass}>{content}</div>;
}
