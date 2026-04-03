import Link from "next/link";
import styles from "./tags.module.scss";
import { TagsProps } from "./tags.types";

export function Tags(props: TagsProps) {
  const { tags } = props;

  return (
    <section className={styles.container}>
      {tags.map((tag, index) => (
        <Link
          key={index}
          href={tag.href}
          className={styles.tag}
          target="_blank"
        >
          <div className={styles.iconAndTextWrapper}>
            <span className={styles.icon}>{tag.leftIcon}</span>

            <span className={styles.text}>{tag.text}</span>
          </div>

          <span className={styles.icon}>{tag.rightIcon}</span>
        </Link>
      ))}
    </section>
  );
}
