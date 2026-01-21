import styles from "./intro.module.scss";
import { TitleSizes } from "@/components/ui/Title/title.type";
import { TextSizes } from "@/components/ui/Text/text.type";
import {
  INTRO_GREETING,
  INTRO_NAME,
  INTRO_PROFESSION,
  INTRO_PROFESSION_PREFIX,
} from "./constants";
import HtmlIcon from "@/components/icons/HtmlIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import TailwindCSSIcon from "@/components/icons/TailwindCSSIcon";
import JestIcon from "@/components/icons/JestIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import Image from "next/image";
import MyImage from "../../../../public/brn.png";
import { Text } from "@/components/ui/Text";
import { Tags } from "@/components/ui/Tags";
import { Title } from "@/components/ui/Title";

export default function Intro() {
  const tags = [
    { text: "HTML", icon: <HtmlIcon /> },
    { text: "Tailwind CSS", icon: <TailwindCSSIcon /> },
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
        <div className={styles.avatarWrapper}>
          <figure>
            <Image
              src={MyImage}
              alt="Foto de perfil"
              fill
              className={styles.avatar}
              priority
            />
          </figure>
        </div>

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
            text="Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos."
            size={TextSizes.SMALL}
            color="var(--gray-300)"
          />
        </div>

        <Tags tags={tags} className={styles.tags} />
      </div>
    </section>
  );
}
