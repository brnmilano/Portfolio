import styles from "./page.module.scss";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";

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

      {/* <Services />

      <Contact /> */}
    </section>
  );
}
