import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function Cantinho() {
  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/cantinho.png"
          alt="Cantinho do amor"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Cantinho do amor - Projeto pessoal para estudos.
          </Text>

          <Text size={14} weight="bold" color="white">
            Dediquei esse projeto para a evolução das minhas habilidades em
            HTML, CSS e JavaScript. Nele utilizei uma lógica simples para
            indicar que o estabelecimento estaria aberto até um horário X,
            fechado durante um período Y e aberto durante um périodo Z. Aqui
            também pude evoluir minhas habilidades com a responsividade da
            aplicação.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/massoterapia/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
