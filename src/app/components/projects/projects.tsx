import { Card } from "@/components/ui/Card";
import styles from "./projects.module.scss";
import { Title } from "@/components/ui/Title";
import { TitleSizes } from "@/components/ui/Title/title.type";
import { Text, TextSizes } from "@/components/ui/Text";

export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <Text text="Meu trabalho" size={TextSizes.MEDIUM} color="var(--red)" />

        <Title
          text="Veja os projetos em destaque"
          size={TitleSizes.MEDIUM}
          color="var(--white)"
        />
      </div>

      <div>
        <Card />
      </div>
    </section>
  );
}
