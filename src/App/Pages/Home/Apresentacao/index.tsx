import Box from "Components/Box";
import FadeInFromLeftWhenVisible from "Components/Animations/FadeInFromLeftWhenVisible";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";
import GitHubIcon from "@mui/icons-material/GitHub";
import Heading from "Components/Heading";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import useIsMobile from "helpers/useIsMobile";

export default function Professor() {
  const isMobile = useIsMobile({ mobileSize: 1260 });

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <FadeInWhenVisible>
          <Box className={styles.card}>
            <Box className={styles.cardImage}>
              <Box className={styles.imageContainer}>
                <img alt="Bruno Milano" src="/images/bruno-milano.png" />
              </Box>
            </Box>

            <FadeInFromLeftWhenVisible>
              <Box marginTop={60}>
                <Heading
                  size={isMobile ? 36 : 44}
                  color="white"
                  fontFamily="Cabin"
                  weight="semi-bold"
                >
                  Bruno Milano
                </Heading>
              </Box>

              <Heading className={styles.cardSubtitle} size={20}>
                Desenvolvedor front-end a 1 ano
              </Heading>

              <Box className={styles.textContainer}>
                <p>
                  Ao me ver rodeado de programadores, decidi entrar de cabeça no
                  mundo da tecnologia. Com muito foco tive uma evolução
                  extraordinária e hoje faço parte de uma escola para novos devs
                  front-end, além de atuar diretamente em diversos projetos de
                  grandes empresas brasileiras, inclusive empresas
                  internacionais.
                </p>

                <p>
                  Apaixonado por aplicações web responsivas e de alta qualidade.
                </p>

                <Box>
                  <p>Sempre em busca de novas oportunidades de crescimento!</p>
                </Box>
              </Box>

              <Box className={styles.contact}>
                <Box display="flex" alignItems="center" gap={10}>
                  <img alt="Localiação" src="/images/localizacao.png" />
                  <Text size={isMobile ? 14 : 16} color="lightGray">
                    Brasília, DF - Brasil
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap={10}>
                  <img
                    className={styles.email}
                    alt="E-mail"
                    src="/images/email.png"
                  />
                  <Text size={isMobile ? 14 : 16} color="lightGray">
                    brnmilano.dev@gmail.com
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap={9}>
                  <img
                    className={styles.telefone}
                    alt="Telefone"
                    src="/images/telefone.png"
                  />
                  <Text size={isMobile ? 14 : 16} color="lightGray">
                    (61) 9 9882-2870 / (61) 9 8257-5381
                  </Text>
                </Box>
              </Box>

              <Box alignItems="center" display="flex" marginTop={35}>
                <a
                  className={styles.socialMedia}
                  href="https://github.com/brnmilano"
                  id="github-bruno-milano"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon style={{ color: "#5C6BC0", fontSize: 34 }} />
                </a>

                <a
                  className={styles.socialMedia}
                  href="https://www.linkedin.com/in/brunomilano/"
                  id="linkedin-bruno-milano"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon style={{ color: "#0076FF", fontSize: 34 }} />
                </a>
              </Box>
            </FadeInFromLeftWhenVisible>
          </Box>
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
}
