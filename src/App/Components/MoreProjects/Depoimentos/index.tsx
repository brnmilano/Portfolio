import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function Depoimentos() {
  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/depoimentos.png"
          alt="Cantinho do amor"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Grade de depoimentos - Projeto pessoal para estudos.
          </Text>

          <Text size={14} weight="bold" color="white">
            Dediquei esse projeto para a evolução das minhas habilidades em
            HTML, CSS e JavaScript. Nele utilizei uma lógica simples para
            indicar que o estabelecimento estaria aberto até um horário X,
            fechado durante um período Y e aberto durante um périodo Z. Aqui
            também evolui minhas habilidades com a responsividade da aplivação.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/testimonials-grid-section/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
