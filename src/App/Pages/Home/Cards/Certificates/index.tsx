import Box from "Components/Box";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import Button from "@mui/material/Button";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";
import FadeInFromLeftWhenVisible from "Components/Animations/FadeInFromLeftWhenVisible";

export default function Certificados() {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <FadeInWhenVisible>
          <Box className={styles.card}>
            <Box display="flex" justifyContent="between" alignItems="center">
              <Heading color="white">Certificados</Heading>
              <Button classes={{ root: styles.button }} href="#text-buttons">
                Ver todos
              </Button>
            </Box>

            <Box className={styles.lineShadow}></Box>

            <FadeInFromLeftWhenVisible>
              <Box className={styles.projects}>
                <Box className={styles.projectCard}>
                  <img
                    className={styles.projectsImages}
                    src="/images/alura.png"
                    alt=""
                  />
                  <Box>
                    <Text color="white">Formação Front-End</Text>
                    <Text color="white">Alura, 2021</Text>
                  </Box>
                </Box>
              </Box>
            </FadeInFromLeftWhenVisible>
          </Box>
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
}
