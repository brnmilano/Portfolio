import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function FrontAcademy() {
  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/front-academy.png"
          alt="Front Academy"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Front Academy - Projeto feito representando a
            <Link href=" https://www.pmakers.com.br/">
              <a> PMakers.</a>
            </Link>
          </Text>

          <Text size={14} weight="bold" color="white">
            Responsável pela criação e de componentes utilizando Next.JS, focado
            em todo o desenvolvimento Desktop do projeto, ensino e suporte aos
            devs responsáveis pela responsividade do site. Nesse projeto,
            aprimorei meus conhecimentos em JavaScript, HTML, CSS e SCSS.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://www.frontacademy.com.br/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
