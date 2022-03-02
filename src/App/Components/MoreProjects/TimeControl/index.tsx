import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function TimeControl() {
  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/time-tracking.png"
          alt="Cantinho do amor"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Painel de controle de tempo - Projeto pessoal para estudos.
          </Text>

          <Text size={14} weight="bold" color="white">
            Dediquei esse projeto para a evolução das minhas habilidades em
            HTML, CSS e JavaScript. Nele utilizei JavaScript puro para alterar o
            horário dos cards em, tempo diário, tempo semanal e tempo mensal,
            cada um apresentando um tempo diferente para cada tarefa do usuário.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/time-tracking-dashboard/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
