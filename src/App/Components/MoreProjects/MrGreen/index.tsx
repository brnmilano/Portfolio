import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function () {
  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/mr-green.png"
          alt="Mr Green"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Mr. Green - Projeto feito representando a
            <Link href=" https://www.pmakers.com.br/">
              <a> PMakers.</a>
            </Link>
          </Text>

          <Text size={14} weight="bold" color="white">
            Responsável pela criação e estilização da aplicação, esse projeto
            foi criado em Next.JS, nele apliquei todos os meus conhecimentos em
            JavaScript, TypeScript, HTML, CSS, SCSS além de ficar responsável
            por mais de 90% da responsividade da aplicação (uma das coisas que
            mais amo fazer dentro dos projetos).
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://www.mistergreen.com.br/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
