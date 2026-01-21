import Image from "next/image";
import styles from "./card.module.scss";
import { CardProps } from "./card.types";
import { Title } from "../Title";
import { TitleSizes } from "../Title/title.types";
import { Text, TextSizes } from "../Text";

export function Card(props: CardProps) {
  const { title, description, imageUrl, projectUrl } = props;

  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <figure className={styles.imageWrapper}>
        <Image
          className={styles.image}
          fill
          src={imageUrl}
          alt={title}
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </figure>

      <div className={styles.content}>
        <Title text={title} size={TitleSizes.SMALL} color="var(--white)" />

        <Text
          text={description}
          size={TextSizes.SMALL}
          color="var(--gray-300)"
        />
      </div>
    </a>
  );
}
