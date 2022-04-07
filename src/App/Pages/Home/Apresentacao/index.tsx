import Box from "Components/Box";
import FadeInFromLeftWhenVisible from "Components/Animations/FadeInFromLeftWhenVisible";
import FadeInWhenVisible from "Components/Animations/FadeInWhenVisible";
import GitHubIcon from "@mui/icons-material/GitHub";
import Heading from "Components/Heading";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import useIsMobile from "helpers/useIsMobile";
import PortraitIcon from "@mui/icons-material/Portrait";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Professor() {
  const isMobile = useIsMobile({ mobileSize: 1175 });

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
              <Box className={styles.heading}>
                <Heading
                  size={isMobile ? 28 : 36}
                  color="white"
                  fontFamily="Cabin"
                  weight="semi-bold"
                >
                  Bruno Milano
                </Heading>
              </Box>

              <Text className={styles.cardSubtitle} size={isMobile ? 16 : 18}>
                Desenvolvedor front-end
              </Text>

              <Box className={styles.textContainer}>
                <Text size={isMobile ? 14 : 16} color="white">
                  Ao me ver rodeado de programadores, decidi entrar de cabeça no
                  mundo da tecnologia e com muito foco tive uma evolução
                  extraordinária e atuo diretamente em diversos projetos de
                  grandes empresas brasileiras. Minha carreira como
                  desenvolvedor front-end é focada em React.JS e sou apaixonado
                  por aplicações web responsivas e de alta qualidade estou
                  sempre em busca de novas oportunidades de crescimento!
                </Text>
              </Box>

              <Box className={styles.contact}>
                <Box display="flex" alignItems="center" gap={10}>
                  <img alt="Localiação" src="/images/localizacao.png" />
                  <Text size={isMobile ? 12 : 14} color="lightGray">
                    Brasília, DF - Brasil
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap={10}>
                  <img
                    className={styles.email}
                    alt="E-mail"
                    src="/images/email.png"
                  />
                  <Text size={isMobile ? 12 : 14} color="lightGray">
                    brnmilano.dev@gmail.com
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap={9}>
                  <img
                    className={styles.telefone}
                    alt="Telefone"
                    src="/images/telefone.png"
                  />
                  <Text size={isMobile ? 12 : 14} color="lightGray">
                    (61) 9 8342-6022
                  </Text>
                </Box>
              </Box>

              <Box className={styles.social}>
                <a
                  className={styles.socialMedia}
                  href="https://github.com/brnmilano"
                  id="github-bruno-milano"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon style={{ color: "#5C6BC0", fontSize: 24 }} />
                </a>

                <a
                  className={styles.socialMedia}
                  href="https://www.linkedin.com/in/brunomilano/"
                  id="linkedin-bruno-milano"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon style={{ color: "#0076FF", fontSize: 24 }} />
                </a>

                <a
                  className={styles.socialMedia}
                  href="mailto:brnmilano.dev@gmail.com"
                  id="linkedin-bruno-milano"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MailOutlineIcon style={{ color: "#0078d4", fontSize: 24 }} />
                </a>

                <a
                  className={styles.socialMedia}
                  href="https://drive.google.com/file/d/1uys_w06ER4eUZFzfZ52YemubGVsmzwpI/view?usp=sharing"
                  id="currículo-bruno-milano"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PortraitIcon style={{ color: "#4149E1", fontSize: 24 }} />
                </a>
              </Box>
            </FadeInFromLeftWhenVisible>
          </Box>
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
}
