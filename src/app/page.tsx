import { Button } from "@/components/ui/Button";
import {
  ButtonSizes,
  ButtonVariants,
} from "@/components/ui/Button/button.type";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import MailIcon from "@/components/icons/MailIcon";
import LinkedInIcon from "@/components/icons/LinkedinIcon";
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";
import styles from "./page.module.scss";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/contact";
import Services from "./components/services/contact";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <section className={styles.container}>
      {/* <Button
        iconLeft={<MailIcon size={30} />}
        iconRight={<ArrowUpRightIcon />}
        text="Linkedin"
        social={true}
        buttonVariant={ButtonVariants.SOCIAL}
        size={ButtonSizes.MEDIUM}
      />

      <MailIcon size={100} />
      <GitHubIcon size={100} />
      <TypeScriptIcon size={90} />
      <LinkedInIcon size={90} /> */}

      <Intro />

      <Projects />

      <Services />

      <Contact />
    </section>
  );
}
