import styles from "./page.module.scss";
import Intro from "./_components/intro/intro";
import Projects from "./_components/projects/projects";
import Services from "./_components/services/services";
import Contact from "./_components/contact/contact";

export default function Home() {
  return (
    <section className={styles.container}>
      <Intro />

      <Projects />

      <Services />

      <Contact />
    </section>
  );
}
