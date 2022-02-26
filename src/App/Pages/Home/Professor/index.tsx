import Box from "Components/Box";
import Container from "Components/Container";
import FadeInFromLeftWhenVisible from "Components/Animations/FadeInFromLeftWhenVisible";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";
import GitHubIcon from "@mui/icons-material/GitHub";
import Heading from "Components/Heading";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.scss";
import Text from "Components/Text";

export default function Professor() {
  return (
    <Box anchorId="quem-somos" className={styles.container}>
      <Container overflowHidden={false}>
        <Box className={styles.content}>
          <FadeInWhenVisible>
            <Box className={styles.card}>
              <Box className={styles.cardImage}>
                <Box className={styles.imageContainer}>
                  <img
                    alt="Professor Bruno Lucena"
                    src="/images/professor-bruno-lucena.jpg"
                  />
                </Box>
              </Box>

              <Box marginTop={90}>
                <Heading
                  className={styles.cardTitle}
                  fontFamily="Cabin"
                  weight="semi-bold"
                >
                  Bruno Milano
                </Heading>
              </Box>

              <Heading className={styles.cardSubtitle} size={20}>
                Desenvolvedor a 1 ano
              </Heading>

              <Box className={styles.textContainer}>
                <Text color="white">
                  Ao me ver rodeado de programadores, decidi entrar de cabeça no
                  mundo da tecnologia. Com muito foco tive uma evolução
                  extraordinária e hoje faço parte de uma escola para novos devs
                  front-end, além de atuar diretamente em diversos projetos de
                  grandes empresas brasileiras, inclusive empresas
                  internacionais.
                </Text>
              </Box>

              <Box alignItems="center" display="flex" marginTop={40}>
                <a
                  className={styles.socialMedia}
                  href="https://github.com/brunolucena"
                  id="github-bruno-lucena"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon style={{ color: "#5C6BC0", fontSize: 34 }} />
                </a>

                <a
                  className={styles.socialMedia}
                  href="https://www.linkedin.com/in/bruno-lucena"
                  id="linkedin-bruno-lucena"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon style={{ color: "#0076FF", fontSize: 34 }} />
                </a>
              </Box>
            </Box>
          </FadeInWhenVisible>
        </Box>
      </Container>
    </Box>
  );
}
