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
import { ProjectCard } from "./ProjectCard";
import {
  COFFEE_DELIVERY,
  COFFEE_DELIVERY_ID,
  COFFEE_DELIVERY_LINK,
  COFFEE_DELIVERY_TITLE,
  DESIGN_SYSTEM,
  DESIGN_SYSTEM_ID,
  DESIGN_SYSTEM_LINK,
  DESIGN_SYSTEM_TITLE,
  GITHUB_BLOG,
  GITHUB_BLOG_ID,
  GITHUB_BLOG_LINK,
  GITHUB_BLOG_TITLE,
  MY_SIDE_DESCRIPTION,
  MY_SIDE_ID,
  MY_SIDE_LINK,
  MY_SIDE_TITLE,
  TABELA_FIPE,
  TABELA_FIPE_ID,
  TABELA_FIPE_LINK,
  TABELA_FIPE_TITLE,
  TODO_LIST,
  TODO_LIST_ID,
  TODO_LIST_LINK,
  TODO_LIST_TITLE,
} from "./constants";

const PROJECTS_DATA = [
  {
    id: MY_SIDE_ID,
    title: MY_SIDE_TITLE,
    description: MY_SIDE_DESCRIPTION,
    imageUrl: BgBlack,
    projectUrl: MY_SIDE_LINK,
  },
  {
    id: TABELA_FIPE_ID,
    title: TABELA_FIPE_TITLE,
    description: TABELA_FIPE,
    imageUrl: TabelaFipe,
    projectUrl: TABELA_FIPE_LINK,
  },
  {
    id: COFFEE_DELIVERY_ID,
    title: COFFEE_DELIVERY_TITLE,
    description: COFFEE_DELIVERY,
    imageUrl: CoffeeDelivery,
    projectUrl: COFFEE_DELIVERY_LINK,
  },
  {
    id: GITHUB_BLOG_ID,
    title: GITHUB_BLOG_TITLE,
    description: GITHUB_BLOG,
    imageUrl: GitHubBlog,
    projectUrl: GITHUB_BLOG_LINK,
  },
  {
    id: TODO_LIST_ID,
    title: TODO_LIST_TITLE,
    description: TODO_LIST,
    imageUrl: TodoList,
    projectUrl: TODO_LIST_LINK,
  },
  {
    id: DESIGN_SYSTEM_ID,
    title: DESIGN_SYSTEM_TITLE,
    description: DESIGN_SYSTEM,
    imageUrl: DesignSystem,
    projectUrl: DESIGN_SYSTEM_LINK,
  },
];

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
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
}
