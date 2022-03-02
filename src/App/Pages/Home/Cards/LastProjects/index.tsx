import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "Components/Box";
import Button from "@mui/material/Button";
import FadeInFromLeftWhenVisible from "Components/Animations/FadeInFromLeftWhenVisible";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import useIsMobile from "helpers/useIsMobile";

export default function LastProjects() {
  const isMobile = useIsMobile({ mobileSize: 1440 });
  const isTablet = useIsMobile({ mobileSize: 850 });

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <FadeInWhenVisible>
          <Box className={styles.card}>
            <Box display="flex" justifyContent="between" alignItems="center">
              <Heading color="white"size={isMobile ? 28 : 36} >Últimos projetos</Heading>
              <Button classes={{ root: styles.button }} href="projetos">
                Ver todos
              </Button>
            </Box>

            <Box className={styles.lineShadow}></Box>

            <FadeInFromLeftWhenVisible>
              <Box className={styles.projects}>
                <Box className={styles.projectCard}>
                  <img
                    className={styles.projectsImages}
                    src="/images/mr-green.png"
                    alt="Mr. Green"
                  />
                  <Text size={14} color="white">
                    Mr. Green, projeto feito em Next.JS, clique e fique por
                    dentro de tudo!
                  </Text>

                  <Box className={styles.arrow}>
                    <Button
                      classes={{ root: styles.button }}
                      href="https://www.mistergreen.com.br/"
                      target={"_blank"}
                    >
                      <ArrowForwardIosIcon />
                    </Button>
                  </Box>
                </Box>

                <Box className={styles.projectCard}>
                  <img
                    className={styles.projectsImages}
                    src="/images/front-academy.png"
                    alt="Front Academy"
                  />
                  <Text size={14} color="white">
                    Front Academy, projeto feito em Next.JS, clique e fique por
                    dentro de tudo!
                  </Text>

                  <Box className={styles.arrow}>
                    <Button
                      classes={{ root: styles.button }}
                      href="https://www.frontacademy.com.br/"
                      target={"_blank"}
                    >
                      <ArrowForwardIosIcon />
                    </Button>
                  </Box>
                </Box>

                <Box className={styles.projectCard}>
                  <img
                    className={styles.projectsImages}
                    src="/images/decathlon.png"
                    alt="Decathlon"
                  />
                  <Text size={14} color="white">
                    Freelance onde pude desenvolver o trabalho de um dev pleno!
                  </Text>

                  <Box className={styles.arrow}>
                    <Button
                      classes={{ root: styles.button }}
                      href="#text-buttons"
                    >
                      <ArrowForwardIosIcon />
                    </Button>
                  </Box>
                </Box>

                <Box className={styles.projectCard}>
                  <img
                    className={styles.projectsImages}
                    src="/images/cantinho.png"
                    alt="Cantinho do amor"
                  />
                  <Text size={14} color="white">
                    Projeto criado para treinar a criação de componentes.
                  </Text>

                  <Box className={styles.arrow}>
                    <Button
                      classes={{ root: styles.button }}
                      href="https://brnmilano.github.io/massoterapia/"
                      target={"_blank"}
                    >
                      <ArrowForwardIosIcon />
                    </Button>
                  </Box>
                </Box>

                <Box className={styles.projectCard}>
                  <img
                    className={styles.projectsImages}
                    src="/images/depoimentos.png"
                    alt="Grade de depoimentos"
                  />
                  <Text size={14} color="white">
                    Projeto feito para treinar CSS Grid e responsividade.
                  </Text>

                  <Box className={styles.arrow}>
                    <Button
                      classes={{ root: styles.button }}
                      href="https://brnmilano.github.io/testimonials-grid-section/"
                      target={"_blank"}
                    >
                      <ArrowForwardIosIcon />
                    </Button>
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
