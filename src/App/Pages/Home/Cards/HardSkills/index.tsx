import Box from "Components/Box";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";

export default function HardSkills() {
  return (
    <Box className={styles.container}>
      <FadeInWhenVisible>
        <Box className={styles.card}>
          <Heading color="white">Tecnologias e frameworks</Heading>

          <Box className={styles.lineShadow}></Box>

          <Box className={styles.skills}>
            <Box>
              <img
                className={styles.imageSkills}
                src="images/html.png"
                alt="HTML 5"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/css.png"
                alt="CSS 3"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/java-script.png"
                alt="JavaScript"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/type-script.png"
                alt="TypeScript"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/react.png"
                alt="React.JS"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/next-js.png"
                alt="Next.JS"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/git.png"
                alt="Git"
              />
            </Box>

            <Box>
              <img
                className={styles.imageSkills}
                src="images/design-responsivo.png"
                alt="Layouts Responsivos"
              />
            </Box>
          </Box>
        </Box>
      </FadeInWhenVisible>
    </Box>
  );
}
