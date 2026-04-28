import Image from "next/image";
import { TitleSizes } from "@/components/ui/Title/title.types";
import { TextSizes } from "@/components/ui/Text/text.types";
import MyImage from "../../../../public/brn.png";
import { Text } from "@/components/ui/Text";
import { TechBadges } from "@/components/ui/TechBadges";
import { Title } from "@/components/ui/Title";
import {
  GitHubIcon,
  JavaScriptIcon,
  JestIcon,
  NextJsIcon,
  ReactIcon,
  MySQLIcon,
  NodeIcon,
  TypeScriptIcon,
} from "@/components/icons";
import {
  INTRO_DESCRIPTION,
  INTRO_GREETING,
  INTRO_NAME,
  INTRO_PROFESSION,
  INTRO_PROFESSION_PREFIX,
} from "./constants";
import styles from "./intro.module.scss";

export default function Intro() {
  const badges = [
    { text: "MySQL", icon: <MySQLIcon /> },
    { text: "Node.JS", icon: <NodeIcon /> },
    { text: "React.JS", icon: <ReactIcon /> },
    { text: "Next.JS", icon: <NextJsIcon /> },
    { text: "Jest/RTL", icon: <JestIcon /> },
    { text: "TypeScript", icon: <TypeScriptIcon color="#3178C6" /> },
    { text: "JavaScript", icon: <JavaScriptIcon /> },
    { text: "GitHub", icon: <GitHubIcon /> },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <figure className={styles.avatarWrapper}>
          <Image
            src={MyImage}
            alt="Foto de perfil"
            fill
            className={styles.avatar}
            priority
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </figure>

        <div className={styles.texts}>
          <Text
            text={`${INTRO_GREETING} ${INTRO_NAME} ${INTRO_PROFESSION_PREFIX}`}
            size={TextSizes.LARGE}
            color="var(--gray-300)"
          />

          <Title
            text={INTRO_PROFESSION}
            size={TitleSizes.LARGE}
            color="var(--white)"
          />

          <Text
            text={INTRO_DESCRIPTION}
            size={TextSizes.SMALL}
            color="var(--gray-300)"
          />
        </div>

        <TechBadges badges={badges} className={styles.tags} />
      </div>
    </section>
  );
}
