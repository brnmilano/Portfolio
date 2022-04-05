import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";
import useIsMobile from "helpers/useIsMobile";

export default function Loki() {
  const isMobile = useIsMobile({ mobileSize: 540 });

  return (
    <Box className={styles.projects}>
      <Box className={styles.teste}>
        <img
          className={styles.projectsImages}
          src="/images/loki.png"
          alt="Cantinho do amor"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Painel de controle de tempo - Projeto pessoal para estudos.
          </Text>

          <Text size={isMobile ? 12 : 14} weight="bold" color="white">
            Projeto proposto como desafio de uma comunidade de devs que faço
            parte. Projeto feito bem no inicio de minha carreira dev, onde
            aprendi conceitos de HTML e CSS e como adicionar imagens dentro do
            projeto.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/loki-page/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
