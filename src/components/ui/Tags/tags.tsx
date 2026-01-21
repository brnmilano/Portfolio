import styles from "./tags.module.scss";
import { TagsProps } from "./tags.type";

export function Tags(props: TagsProps) {
  const { tags, className } = props;

  const containerClass = className ?? styles.container;

  return (
    <section className={containerClass}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          <span className={styles.icon}>{tag.icon}</span>

          <span className={styles.text}>{tag.text}</span>
        </div>
      ))}
    </section>
  );
}
