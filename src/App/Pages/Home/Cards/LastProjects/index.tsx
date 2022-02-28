import Box from "Components/Box";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

export default function LastProjects() {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Box className={styles.card}>
          <Box display="flex" justifyContent="between" alignItems="center">
            <Heading color="white">Últimos projetos</Heading>
            <Button classes={{ root: styles.button }} href="#text-buttons">
              Ver todos
            </Button>
          </Box>

          <Box className={styles.lineShadow}></Box>

          <Box className={styles.projects}>
            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/mr-green.png"
                alt=""
              />
              <Text color="white">Mr. Green, projeto feito em Next.JS</Text>

              <Box className={styles.arrow}>
                <Button classes={{ root: styles.button }} href="#text-buttons">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>

            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/front-academy.png"
                alt=""
              />
              <Text color="white">Mr. Green, projeto feito em Next.JS</Text>

              <Box className={styles.arrow}>
                <Button classes={{ root: styles.button }} href="#text-buttons">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>

            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/decathlon.png"
                alt=""
              />
              <Text color="white">Mr. Green, projeto feito em Next.JS</Text>

              <Box className={styles.arrow}>
                <Button classes={{ root: styles.button }} href="#text-buttons">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>

            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/cantinho.png"
                alt=""
              />
              <Text color="white">Projeto criado para treinar </Text>

              <Box className={styles.arrow}>
                <Button classes={{ root: styles.button }} href="#text-buttons">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>

            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/depoimentos.png"
                alt=""
              />
              <Text color="white">Projeto feito para treinar CSS Grid e responsividade.</Text>

              <Box className={styles.arrow}>
                <Button classes={{ root: styles.button }} href="#text-buttons">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>

            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/loki.png"
                alt="Loki"
              />
              <Text color="white">Capa da série Loki no Disney+</Text>

              <Box className={styles.arrow}>
                <Button classes={{ root: styles.button }} href="#text-buttons">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
