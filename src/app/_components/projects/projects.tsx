import { Card } from "@/components/ui/Card";
import styles from "./projects.module.scss";
import { Title } from "@/components/ui/Title";
import { TitleSizes } from "@/components/ui/Title/title.types";
import { Text, TextSizes } from "@/components/ui/Text";
import TabelaFipe from "../../../../public/projects/tabela-fipe.png";
import GitHubBlog from "../../../../public/projects/github.png";
import CoffeeDelivery from "../../../../public/projects/coffee-delivery.png";
import DesignSystem from "../../../../public/projects/design-system.png";
import TodoList from "../../../../public/projects/todo-list.png";
import BgBlack from "../../../../public/projects/bg-black.jpg";
import {
  COFFEE_DELIVERY,
  COFFEE_DELIVERY_TITLE,
  DESIGN_SYSTEM,
  DESIGN_SYSTEM_LINK,
  GITHUB_BLOG,
  GITHUB_BLOG_LINK,
  GITHUB_BLOG_TITLE,
  MY_SIDE_DESCRIPTION,
  MY_SIDE_LINK,
  MY_SIDE_TITLE,
  TABELA_FIPE,
  TABELA_FIPE_LINK,
  TABELA_FIPE_TITLE,
  TODO_LIST,
  TODO_LIST_LINK,
  TODO_LIST_TITLE,
} from "./constants";

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

      <div className={styles.projectsWrapper}>
        {/* projeto my side */}
        <Card
          imageUrl={BgBlack}
          title={MY_SIDE_TITLE}
          description={MY_SIDE_DESCRIPTION}
          projectUrl={MY_SIDE_LINK}
        />

        {/* tabela fipe */}
        <Card
          imageUrl={TabelaFipe}
          title={TABELA_FIPE_TITLE}
          description={TABELA_FIPE}
          projectUrl={TABELA_FIPE_LINK}
        />

        {/* coffee delivery */}
        <Card
          imageUrl={CoffeeDelivery}
          title={COFFEE_DELIVERY_TITLE}
          description={COFFEE_DELIVERY}
          projectUrl="https://link-para-o-projeto.com"
        />

        {/* github blog */}
        <Card
          imageUrl={GitHubBlog}
          title={GITHUB_BLOG_TITLE}
          description={GITHUB_BLOG}
          projectUrl={GITHUB_BLOG_LINK}
        />

        {/* todo list */}
        <Card
          imageUrl={TodoList}
          title={TODO_LIST_TITLE}
          description={TODO_LIST}
          projectUrl={TODO_LIST_LINK}
        />

        {/* design system */}
        <Card
          imageUrl={DesignSystem}
          title="Design System"
          description={DESIGN_SYSTEM}
          projectUrl={DESIGN_SYSTEM_LINK}
        />
      </div>
    </section>
  );
}
