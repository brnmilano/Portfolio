import styles from "./contact.module.scss";
import { Title, TitleSizes } from "@/components/ui/Title";
import { Text, TextSizes } from "@/components/ui/Text";
import { Tags } from "@/components/ui/Tags";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import {
  EMAIL_TEXT,
  EMAIL_URL,
  GITHUB_TEXT,
  GITHUB_URL,
  LINKEDIN_TEXT,
  LINKEDIN_URL,
} from "./constants";

export default function Contact() {
  const tagsData = [
    {
      text: LINKEDIN_TEXT,
      href: LINKEDIN_URL,
      leftIcon: <LinkedInIcon />,
      rightIcon: <ArrowUpRightIcon />,
    },
    {
      text: GITHUB_TEXT,
      href: GITHUB_URL,
      leftIcon: <GitHubIcon />,
      rightIcon: <ArrowUpRightIcon />,
    },
    {
      text: EMAIL_TEXT,
      href: EMAIL_URL,
      leftIcon: <MailIcon />,
      rightIcon: <ArrowUpRightIcon />,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.texts}>
          <Title
            text="Gostou do meu trabalho? "
            size={TitleSizes.MEDIUM}
            color="var(--white)"
          />

          <Text
            text="Entre em contato ou acompanhe as minhas redes sociais!"
            size={TextSizes.MEDIUM}
            color="var(--gray-200)"
          />
        </div>

        <div className={styles.tags}>
          <Tags tags={tagsData} />
        </div>
      </div>
    </section>
  );
}
